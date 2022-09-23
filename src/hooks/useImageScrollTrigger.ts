import gsap from "gsap";
import { RefObject } from "react";

import useLayoutEffect from "./useIsomorphicLayoutEffect";
import { elementInView } from "./useTextScrollTrigger";

const imageAnimation = (ref: RefObject<HTMLElement>, tl: gsap.core.Timeline) => {
    tl.from(ref.current, {
        opacity: 0,
        duration: 0.3,
    });
};

const handleScrollAnimation = (el: HTMLElement, tl: gsap.core.Timeline) => {
    if (elementInView(el, window.innerHeight * 0.4)) {
        tl.play();
    }
};

const useImageScrollTrigger = (ref: RefObject<HTMLElement>) => {
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            paused: true,
            onComplete: () => {
                ref.current.classList.add("done");
            },
        });

        imageAnimation(ref, tl);

        const handler = () => {
            handleScrollAnimation(ref.current, tl);
        };

        handleScrollAnimation(ref.current, tl);

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, [ref]);
};

export default useImageScrollTrigger;
