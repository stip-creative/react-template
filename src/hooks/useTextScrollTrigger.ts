import gsap from "gsap";
import { RefObject } from "react";

import { mainTitle, paragraph as paragraphAnimationVars } from "../animationConstants/Text";

import useLayoutEffect from "./useIsomorphicLayoutEffect";

export enum TextAnimationTypes {
    title = "title",
    paragraph = "paragraph",
    caption = "caption",
}

const titleAnimation = (ref: RefObject<HTMLElement>, tl: gsap.core.Timeline) => {
    tl.from(ref.current.querySelectorAll(".parent"), {
        ...mainTitle.parent.vars,
    });
    tl.from(ref.current.querySelectorAll(".parent > span, .parent > b"), {
        ...mainTitle.children.vars,
    });
};

const paragraphAnimation = (ref: RefObject<HTMLElement>, tl: gsap.core.Timeline) => {
    tl.from(ref.current.querySelectorAll(".children"), {
        ...paragraphAnimationVars.vars,
    });
};

const captionAnimation = (ref: RefObject<HTMLElement>, tl: gsap.core.Timeline) => {
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

const handleScrollAnimation = (el: HTMLElement, tl: gsap.core.Timeline) => {
    if (elementInView(el, window.innerHeight * -0.1)) {
        tl.play();
    }
};

const useTextScrollTrigger = (ref: RefObject<HTMLElement>, withoutAnimation: boolean, animationType: TextAnimationTypes) => {
    useLayoutEffect(() => {
        if (!withoutAnimation) {
            const tl = gsap.timeline({
                paused: true,
                onComplete: () => {
                    ref.current.classList.add("done");
                },
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
