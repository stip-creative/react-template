import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { IFact } from "../../../models/IFact";
import TextType from "../../../models/TextType";
import Text from "../../Text";
import { mainTitle, paragraph } from "../../../animationConstants/Text";

import { StyledDescriptionWrapper, StyledFigure, StyledImg, StyledWrapper, StyledCircle } from "./style";

export interface IFactProps extends IFact {
    reverse: boolean;
}

const Fact: FunctionComponent<IFactProps> = ({ title, text, image, reverse }) => {
    const wrapperRef = useRef();
    const circleRef = useRef();

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (wrapperRef.current) {
            gsap.from(wrapperRef.current, {
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    start: "center bottom",
                    trigger: wrapperRef.current,
                },
            });
            gsap.from(circleRef.current, {
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    start: "center bottom",
                    trigger: wrapperRef.current,
                },
            });
            gsap.from(wrapperRef.current.querySelectorAll(".main-title .parent"), {
                ...mainTitle.parent.vars,
                scrollTrigger: mainTitle.children.scrollTrigger(wrapperRef.current),
            });
            gsap.from(wrapperRef.current.querySelectorAll(".main-title .parent > span, .main-title .parent > b"), {
                ...mainTitle.children.vars,
                scrollTrigger: mainTitle.children.scrollTrigger(wrapperRef.current),
            });
            gsap.from(wrapperRef.current.querySelectorAll(".parahraph .children"), {
                ...paragraph.vars,
                scrollTrigger: paragraph.scrollTrigger(wrapperRef.current),
            });
        }
    }, []);

    return (
        <StyledWrapper ref={wrapperRef} reverse={reverse}>
            <StyledFigure>
                <StyledImg className="paralax" src={image.url} alt={image.alt} />
            </StyledFigure>
            <StyledDescriptionWrapper>
                <Text type={TextType.h3} text={title.text} withoutAnimation />
                <Text type={TextType.body} text={text.text} withoutAnimation withoutLineBreak />
                <StyledCircle ref={circleRef} />
            </StyledDescriptionWrapper>
        </StyledWrapper>
    );
};

export default Fact;
