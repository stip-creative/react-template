import { useCallback, useEffect, useMemo, useRef } from "react";
import { useLocation } from "react-router-dom";

import { ICustomScrollDomElements } from "../models/ICustomScrollDomElements";
import lerp from "../utils/lerp";

const useCustomScroll = () => {
    const location = useLocation();

    const ease = 0.1;
    const docScrollRef = useRef<number>(0);
    const scrollToRenderRef = useRef<number>(0);
    const realScrollRef = useRef<number>(0);
    const speedRef = useRef<number>(0);
    const speedTargetRef = useRef<number>(0);

    const DOM: ICustomScrollDomElements = useMemo(
        () => ({
            root: document.getElementById("root"),
            scrollable: document.getElementById("root").querySelector("[data-scroll]"),
        }),
        []
    );

    const getScroll = useCallback(() => {
        let docScroll = docScrollRef.current;

        docScroll = window.pageYOffset || document.documentElement.scrollTop;

        return docScroll;
    }, []);

    const setPosition = useCallback(() => {
        if (Math.round(scrollToRenderRef.current) !== Math.round(realScrollRef.current) || scrollToRenderRef.current < 10) {
            DOM.scrollable.style.transform = `translate3d(0,${-1 * scrollToRenderRef.current}px,0)`;
        }
    }, [DOM.scrollable.style]);

    const setStyle = useCallback(() => {
        DOM.root.style.position = "fixed";
        DOM.root.style.width = "100%";
        DOM.root.style.height = "100%";
        DOM.root.style.top = "0";
        DOM.root.style.left = "0";
        DOM.root.style.overflow = "hidden";
    }, [DOM.root.style]);

    const setSize = useCallback(() => {
        DOM.scrollable = DOM.root.querySelector("[data-scroll]");
        document.body.style.height = `${DOM.scrollable.scrollHeight}px`;
    }, [DOM]);

    const initEvents = useCallback(() => {
        window.addEventListener("resize", () => setSize);
        window.addEventListener("scroll", getScroll);
    }, [getScroll, setSize]);

    const init = useCallback(() => {
        scrollToRenderRef.current = getScroll();
        realScrollRef.current = getScroll();

        setPosition();
    }, [getScroll, setPosition]);

    const render = useCallback(() => {
        speedRef.current = Math.min(Math.abs(realScrollRef.current - scrollToRenderRef.current), 200) / 200;
        speedTargetRef.current += (speedRef.current - speedTargetRef.current) * 0.2;

        realScrollRef.current = getScroll();
        scrollToRenderRef.current = lerp(scrollToRenderRef.current, realScrollRef.current, ease);

        setPosition();

        requestAnimationFrame(() => render());
    }, [getScroll, setPosition]);

    useEffect(() => {
        setSize();
        init();
        setStyle();
        initEvents();
        requestAnimationFrame(() => render());
    }, [init, initEvents, render, setSize, setStyle]);

    useEffect(() => {
        setSize();
    }, [location.pathname, setSize]);
};

export default useCustomScroll;
