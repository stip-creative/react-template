import React, { FunctionComponent, useLayoutEffect, useRef, useState } from "react";

import Text from "../../Text";
import TextType from "../../../models/TextType";
import { IText } from "../../../models/IText";

import { StyledCircle, StyledHiddenWrapper, StyledLine, StyledMinus, StyledMinusSecond, StyledTextWrapper, StyledTitleWrapper, StyledWrapper } from "./style";

export interface IElement {
    title: string;
    text: IText;
}

const Element: FunctionComponent<IElement> = ({ title, text }) => {
    const wrapperRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    useLayoutEffect(() => {
        if (wrapperRef.current) {
            wrapperRef.current.querySelector(".overflow").style.maxHeight = `${wrapperRef.current.querySelector(".title").scrollHeight}px`;
        }
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
        if (wrapperRef.current) {
            wrapperRef.current.querySelector(".overflow").style.maxHeight = !isOpen
                ? `${wrapperRef.current.querySelector(".title").scrollHeight + wrapperRef.current.querySelector(".text").scrollHeight}px`
                : `${wrapperRef.current.querySelector(".title").scrollHeight}px`;
            wrapperRef.current.querySelector(".second").style.opacity = !isOpen ? "0" : "1";
        }
    };

    return (
        <>
            <StyledWrapper ref={wrapperRef} className="wrapper">
                <StyledHiddenWrapper className="overflow">
                    <StyledTitleWrapper className="title" onClick={handleClick}>
                        <Text text={title} spans={[]} type={TextType.question} withoutAnimation />
                        <StyledCircle>
                            <StyledMinus />
                            <StyledMinusSecond className="second" />
                        </StyledCircle>
                    </StyledTitleWrapper>
                    <StyledTextWrapper className="text">
                        <Text text={text.text} spans={[]} type={TextType.bodyLarge} withoutAnimation />
                    </StyledTextWrapper>
                </StyledHiddenWrapper>
            </StyledWrapper>
            <StyledLine />
        </>
    );
};

export default Element;
