import gsap from "gsap";

import { mainTitle, paragraph as paragraphAnimationVars } from "../animationConstants/Text";

import useLayoutEffect from "./useIsomorphicLayoutEffect";

export enum TextAnimationTypes {
    title = "title",
    paragraph = "paragraph",
    caption = "caption",
}

const titleAnimation = (ref: any, tl: gsap.core.Timeline) => {
    tl.from(ref.current.querySelectorAll(".parent"), {
        ...mainTitle.parent.vars,
    });
    tl.from(ref.current.querySelectorAll(".parent > span, .parent > b"), {
        ...mainTitle.children.vars,
    });
};

const paragraphAnimation = (ref: any, tl: gsap.core.Timeline) => {
    tl.from(ref.current.querySelectorAll(".children"), {
        ...paragraphAnimationVars.vars,
    });
};

const captionAnimation = (ref: any, tl: gsap.core.Timeline) => {
    tl.from(ref.current, {
        opacity: 0,
        stagger: 0.01,
        delay: 0.2,
    });
};

const elementInView = (el: HTMLElement, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const handleScrollAnimation = (el: any, tl: gsap.core.Timeline) => {
    if (elementInView(el, window.innerHeight * 0.2)) {
        console.log(el);
        console.log(tl.getChildren());
        tl.play();
    }
};

const useTextScrollTrigger = (ref: any, withoutAnimation: boolean, animationType: TextAnimationTypes) => {
    useLayoutEffect(() => {
        if (!withoutAnimation) {
            const tl = gsap.timeline({
                paused: true,
            });

            switch (animationType) {
                case TextAnimationTypes.title:
                    titleAnimation(ref, tl);
                    break;
                case TextAnimationTypes.paragraph:
                    paragraphAnimation(ref, tl);
                    break;
                case TextAnimationTypes.caption:
                    captionAnimation(ref, tl);
                    break;
                default:
                    titleAnimation(ref, tl);
            }

            const handler = () => {
                handleScrollAnimation(ref.current, tl);
            };

            handleScrollAnimation(ref.current, tl);

            window.addEventListener("scroll", handler);

            return () => window.removeEventListener("scroll", handler);
        }
    }, [animationType, ref, withoutAnimation]);
};

export default useTextScrollTrigger;
