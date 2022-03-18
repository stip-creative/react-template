import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Location } from "react-router";

import { RootState } from "../../store";

import { StyledWrapper, StyledTitle } from "./style";

export interface ITitle {
    location: Location;
}

const TransitionTitle: FunctionComponent<ITitle> = ({ location }) => {
    const aboutMetaTitle = useSelector((state: RootState) => state.about.seo.metaTitle);
    const homeMetaTitle = useSelector((state: RootState) => state.home.seo.metaTitle);
    const timeLine = useSelector((state: RootState) => state.pageTransition.timeLine);
    const [text, setText] = useState<string>(homeMetaTitle);

    const lettersArray = text.split("");
    const titleRef = useRef<HTMLHeadingElement>();

    useEffect(() => {
        const showText = timeLine.getById("showText");
        const hideText = timeLine.getById("hideText");

        if (showText && hideText) {
            timeLine.remove(showText);
            timeLine.remove(hideText);
        }

        timeLine.to("#title span", { id: "showText", opacity: 1, stagger: 0.1 }, 2);
        timeLine.to("#title span", { id: "hideText", opacity: 0, stagger: 0.1 }, 3);
    }, [text, timeLine]);

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
            <StyledTitle id="title" ref={titleRef}>
                {lettersArray.map(letter => (
                    <span key={letter}>{letter}</span>
                ))}
            </StyledTitle>
        </StyledWrapper>
    );
};

export default TransitionTitle;
