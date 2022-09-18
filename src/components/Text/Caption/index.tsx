import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { ITextProps } from "..";
import TextType from "../../../models/TextType";

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

    useLayoutEffect(() => {
        if (textRef.current && !withoutAnimation) {
            gsap.from(textRef.current, {
                opacity: 0,
                stagger: 0.01,
                delay: 0.2,
                scrollTrigger: {
                    start: "top center",
                    trigger: textRef.current,
                },
            });
        }
    }, [withoutAnimation]);

    return (
        <Wrapper className="captions notranslate" ref={textRef}>
            {text}
        </Wrapper>
    );
};

export default Caption;
