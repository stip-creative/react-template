import React, { FunctionComponent, useRef } from "react";

import useImageScrollTrigger from "../../../hooks/useImageScrollTrigger";
import { IFact } from "../../../models/IFact";
import TextType from "../../../models/TextType";
import Text from "../../Text";

import { StyledDescriptionWrapper, StyledFigure, StyledImg, StyledWrapper, StyledCircle } from "./style";

export interface IFactProps extends IFact {
    reverse: boolean;
}

const Fact: FunctionComponent<IFactProps> = ({ title, text, image, reverse }) => {
    const imgRef = useRef();

    useImageScrollTrigger(imgRef);

    return (
        <StyledWrapper reverse={reverse}>
            <StyledFigure>
                <StyledImg ref={imgRef} className="parallax" src={image.url} alt={image.alt} />
            </StyledFigure>
            <StyledDescriptionWrapper>
                <Text type={TextType.h3} text={title.text} />
                <Text type={TextType.body} text={text.text} withoutLineBreak />
                <StyledCircle />
            </StyledDescriptionWrapper>
        </StyledWrapper>
    );
};

export default Fact;
