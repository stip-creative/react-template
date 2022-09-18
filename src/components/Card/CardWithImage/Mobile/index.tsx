import React, { FunctionComponent, useRef } from "react";

import { ICard } from "../../../../models/ICard";
import TextType from "../../../../models/TextType";
import Text from "../../../Text";

import { StyledCardMobile, StyledFigure, StyledImg, StyledDescriptionWrapper } from "./style";

const CardWithLinkMobile: FunctionComponent<ICard> = ({ title, subTitle, image }) => {
    const wrapperRef = useRef<HTMLElement>();

    return (
        <>
            <StyledCardMobile ref={wrapperRef}>
                <StyledFigure>
                    <StyledImg src={image.url} alt={image.alt} />
                </StyledFigure>
            </StyledCardMobile>
            <StyledDescriptionWrapper>
                <Text text={title.text} type={TextType.h4} spans={[]} withoutAnimation />
                <Text text={subTitle} type={TextType.bodyCompact} spans={[]} withoutAnimation />
            </StyledDescriptionWrapper>
        </>
    );
};

export default CardWithLinkMobile;
