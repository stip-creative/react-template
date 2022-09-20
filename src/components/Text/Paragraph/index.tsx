import React, { FunctionComponent, useRef } from "react";
import gsap from "gsap";

import useLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";
import { ITextProps } from "..";
import TextType from "../../../models/TextType";
import { paragraph } from "../../../animationConstants/Text";

import { StyledBody, StyledBodyCompact, StyledBodyLarge, StyledQuestion, StyledQuote, StyledH4 } from "./style";

const Paragraph: FunctionComponent<ITextProps> = ({ type, text, withoutAnimation, withoutLineBreak }) => {
    const textRef = useRef();

    const textWithBreaks = text.replace(/\n/g, " </br> ");

    const words = textWithBreaks.split(" ");

    const textWithTags = `<span class="parent"><span class="children">${words.join(`</span></span> <span class="parent"> <span class="children">`)} </span></span>`;

    const textWithTagsAndBreaks = withoutLineBreak ? textWithTags : textWithTags.replace(/<span class="parent"> <span class="children"><\/br><\/span><\/span> /g, "</br>");

    const getWrapper = () => {
        switch (type) {
            case TextType.quote:
                return StyledQuote;
            case TextType.question:
                return StyledQuestion;
            case TextType.bodyLarge:
                return StyledBodyLarge;
            case TextType.body:
                return StyledBody;
            case TextType.bodyCompact:
                return StyledBodyCompact;
            case TextType.h4:
                return StyledH4;
            default:
                return StyledBody;
        }
    };

    const Wrapper = getWrapper();

    useLayoutEffect(() => {
        if (textRef.current && !withoutAnimation) {
            gsap.from(textRef.current.querySelectorAll(".children"), {
                ...paragraph.vars,
                scrollTrigger: paragraph.scrollTrigger(textRef.current),
            });
        }
    }, [withoutAnimation]);

    return <Wrapper translate="no" className="parahraph notranslate" ref={textRef} dangerouslySetInnerHTML={{ __html: textWithTagsAndBreaks }} />;
};

export default Paragraph;
