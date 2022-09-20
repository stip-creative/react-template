import { RefObject, useRef } from "react";
import { isMobile } from "react-device-detect";

import { ICustomScrollDomElements } from "../models/ICustomScrollDomElements";
import { IParalaxElement } from "../models/IParalaxElement";
import lerp from "../utils/lerp";

import useLayoutEffect from "./useIsomorphicLayoutEffect";

const useCustomScroll = (scrollableRef: RefObject<HTMLDivElement>) => {
    const ease = 0.1;
    const docScrollRef = useRef<number>(0);
    const scrollToRenderRef = useRef<number>(0);
    const realScrollRef = useRef<number>(0);
    const speedRef = useRef<number>(0);
    const speedTargetRef = useRef<number>(0);
    const paralaxElementsRef = useRef<IParalaxElement[]>();

    useLayoutEffect(() => {
        if (!scrollableRef.current) return;

        const DOM: ICustomScrollDomElements = {
            root: document.getElementById("root"),
            scrollable: scrollableRef.current,
            paralax: [...(document.querySelectorAll(".paralax") as unknown as HTMLElement[])],
        };

        const creaeteParalaxElementsStore = () => {
            return DOM.paralax.map((element: HTMLElement) => {
                const bounds = element.getBoundingClientRect();

                return {
                    item: element,
                    top: bounds.top + document.documentElement.scrollTop,
                    left: bounds.left,
                    width: bounds.width,
                    height: bounds.height,
                };
            });
        };

        const getScroll = () => {
            let docScroll = docScrollRef.current;

            docScroll = window.pageYOffset || document.documentElement.scrollTop;

            return docScroll;
        };

        const setPosition = () => {
            if (Math.round(scrollToRenderRef.current) !== Math.round(realScrollRef.current) || scrollToRenderRef.current < 10) {
                DOM.scrollable.style.transform = `translate3d(0,${-1 * scrollToRenderRef.current}px,0)`;
                if (paralaxElementsRef.current) {
                    paralaxElementsRef.current.forEach(element => {
                        const newElementTop = (scrollToRenderRef.current - element.top) / 8;

                        element.item.style.transform = `translate3d(0,${-newElementTop}px,0)`;
                    });
                }
            }
        };

        const setStyle = () => {
            DOM.root.style.position = "fixed";
            DOM.root.style.width = "100%";
            DOM.root.style.height = "100%";
            DOM.root.style.top = "0";
            DOM.root.style.left = "0";
            DOM.root.style.overflow = "hidden";
        };

        const setSize = () => {
            document.body.style.height = `${DOM.scrollable.scrollHeight}px`;
        };

        const resize = () => {
            setSize();
            paralaxElementsRef.current = creaeteParalaxElementsStore();
        };

        const initEvents = () => {
            window.addEventListener("resize", resize);
            window.addEventListener("scroll", getScroll);
        };

        const init = () => {
            scrollToRenderRef.current = getScroll();
            realScrollRef.current = getScroll();
            paralaxElementsRef.current = creaeteParalaxElementsStore();

            setPosition();
        };

        const render = () => {
            speedRef.current = Math.min(Math.abs(realScrollRef.current - scrollToRenderRef.current), 200) / 200;
            speedTargetRef.current += (speedRef.current - speedTargetRef.current) * 0.2;

            realScrollRef.current = getScroll();
            scrollToRenderRef.current = lerp(scrollToRenderRef.current, realScrollRef.current, ease);

            setPosition();

            requestAnimationFrame(() => render());
        };

        if (!isMobile) {
            setSize();
            init();
            setStyle();
            initEvents();
            requestAnimationFrame(() => render());
        }
    }, [scrollableRef]);
};

export default useCustomScroll;
