import React, { FunctionComponent, useRef } from "react";

import { ITextProps } from "..";
import TextType from "../../../models/TextType";
import useTextScrollTrigger, { TextAnimationTypes } from "../../../hooks/useTextScrollTrigger";

import { StyledBodySmall, StyledBodyXSmall, StyledButtons, StyledButtonsSmall } from "./style";

const Caption: FunctionComponent<ITextProps> = ({ type, text, withoutAnimation }) => {
    const textRef = useRef();

    const getWrapper = () => {
        switch (type) {
            case TextType.bodySmall:
                return StyledBodySmall;
            case TextType.bodyXSmall:
                return StyledBodyXSmall;
            case TextType.buttons:
                return StyledButtons;
            case TextType.buttonsSmall:
                return StyledButtonsSmall;
            default:
                return StyledBodySmall;
        }
    };

    const Wrapper = getWrapper();

    useTextScrollTrigger(textRef, withoutAnimation, TextAnimationTypes.caption);

    return (
        <Wrapper className="captions notranslate" ref={textRef}>
            {text}
        </Wrapper>
    );
};

export default Caption;
