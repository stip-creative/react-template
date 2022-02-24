import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import gsap from "gsap";

import PageTransitionStatus from "../../../models/PageTransitionStatus";

import { StyledWrapper, StyledTitle } from "./style";

export interface ITitle {
    text: string;
    transitionStatus: PageTransitionStatus;
    callBack: () => void;
}

const TransitionTitle: FunctionComponent<ITitle> = ({ text, transitionStatus, callBack }) => {
    const lettersArray = text.split("");
    const titleRef = useRef<HTMLHeadingElement>();
    const [tl] = useState(() => gsap.timeline());

    useEffect(() => {
        const title = titleRef.current;

        if (!title) return;

        if (transitionStatus === PageTransitionStatus.goIn) {
            tl.to(title.children, { opacity: 1, stagger: 0.1 });
            tl.to(title.children, { opacity: 0, stagger: 0.1, delay: 1, onComplete: callBack });
        }
    }, [callBack, tl, transitionStatus]);

    return (
        <StyledWrapper>
            <StyledTitle ref={titleRef}>
                {lettersArray.map(letter => (
                    <span key={letter}>{letter}</span>
                ))}
            </StyledTitle>
        </StyledWrapper>
    );
};

export default TransitionTitle;
