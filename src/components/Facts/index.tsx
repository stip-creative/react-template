import React, { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";

import { IFact } from "../../models/IFact";
import { ITextSpan } from "../../models/ITextSpan";
import TextType from "../../models/TextType";
import Text from "../Text";

import Fact from "./Fact";
import { StyledFactsWrapper, StyledTitleWrapper, StyledWrapper } from "./style";

export interface IFacts {
    title: string;
    titleType: TextType;
    titleSpans: ITextSpan[];
    facts: IFact[];
}

const Facts: FunctionComponent<IFacts> = ({ title, titleType, titleSpans, facts }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

    return (
        <StyledWrapper>
            <StyledTitleWrapper>
                <Text text={title} type={titleType} spans={titleSpans} withoutLineBreak={isMobile} />
            </StyledTitleWrapper>

            <StyledFactsWrapper>
                {facts.map((fact, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Fact title={fact.title} text={fact.text} image={fact.image} key={index} reverse={index % 2 === 1} />
                ))}
            </StyledFactsWrapper>
        </StyledWrapper>
    );
};

export default Facts;
