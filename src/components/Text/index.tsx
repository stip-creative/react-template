import React, { FunctionComponent } from "react";

import { ITextSpan } from "../../models/ITextSpan";
import TextType from "../../models/TextType";

import MainTitle from "./MainTitle";
import Paragraph from "./Paragraph";
import Caption from "./Caption";

export interface ITextProps {
    type: TextType;
    text: string;
    spans?: ITextSpan[];
    withoutAnimation?: boolean;
    withoutLineBreak?: boolean;
}

const Text: FunctionComponent<ITextProps> = ({ type, text, spans = [], withoutAnimation = false, withoutLineBreak = false }) => {
    switch (type) {
        case TextType.h1:
        case TextType.h2:
            return <MainTitle type={type} text={text} spans={spans} withoutAnimation={withoutAnimation} withoutLineBreak={withoutLineBreak} />;
        case TextType.h3:
            return <MainTitle type={type} text={text} spans={[]} withoutAnimation={withoutAnimation} withoutLineBreak={withoutLineBreak} />;
        case TextType.h4:
        case TextType.quote:
        case TextType.question:
        case TextType.bodyLarge:
        case TextType.body:
        case TextType.bodyCompact:
            return <Paragraph type={type} text={text} withoutAnimation={withoutAnimation} withoutLineBreak={withoutLineBreak} />;
        case TextType.bodySmall:
        case TextType.bodyXSmall:
        case TextType.buttons:
        case TextType.buttonsSmall:
            return <Caption type={type} text={text} withoutAnimation={withoutAnimation} withoutLineBreak={withoutLineBreak} />;
        default:
            return <Paragraph type={type} text={text} withoutAnimation={withoutAnimation} withoutLineBreak={withoutLineBreak} />;
    }
};

export default Text;
