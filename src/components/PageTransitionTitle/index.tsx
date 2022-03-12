import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useSelector } from "react-redux";
import { Location } from "react-router";

import PageTransitionStatus from "../../models/PageTransitionStatus";
import { RootState } from "../../store";

import { StyledWrapper, StyledTitle } from "./style";

export interface ITitle {
    location: Location;
    transitionStatus: PageTransitionStatus;
    callBack: () => void;
}

const TransitionTitle: FunctionComponent<ITitle> = ({ location, transitionStatus, callBack }) => {
    const aboutMetaTitle = useSelector((state: RootState) => state.about.seo.metaTitle);
    const homeMetaTitle = useSelector((state: RootState) => state.home.seo.metaTitle);

    const [text, setText] = useState<string>(homeMetaTitle);

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

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setText(homeMetaTitle);
                break;
            case "/about":
                setText(aboutMetaTitle);
                break;
            default:
                setText(homeMetaTitle);
        }
    }, [aboutMetaTitle, homeMetaTitle, location.pathname]);

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
