import React, { FunctionComponent, useRef } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

import useLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";
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

    return (
        <StyledWrapper ref={wrapperRef} reverse={reverse}>
            <StyledFigure>
                <StyledImg className="paralax" src={image.url} alt={image.alt} />
            </StyledFigure>
            <StyledDescriptionWrapper>
                <Text type={TextType.h3} text={title.text} />
                <Text type={TextType.body} text={text.text} withoutLineBreak />
                <StyledCircle ref={circleRef} />
            </StyledDescriptionWrapper>
        </StyledWrapper>
    );
};

export default Fact;
