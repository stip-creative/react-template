import styled from "styled-components";

import { StyledText } from "../style";

export const StyledParagraph = styled(StyledText)`
    & .parent {
        display: inline-flex;
        overflow: hidden;
    }

    & .children {
        will-change: transform;
        display: inline-flex;
        white-space: pre;
    }
`;

export const StyledH4 = styled(StyledParagraph).attrs({
    as: "h4",
})`
    font-weight: 700;
    font-size: 1.45rem;
    line-height: 110%;
    letter-spacing: 0.015em;

    @media (max-width: 640px) {
        font-size: 1.11rem;
    }
`;

export const StyledQuote = styled(StyledParagraph)`
    font-weight: 400;
    font-size: 1.59rem;
    line-height: 130%;
    letter-spacing: 0.025em;

    @media (max-width: 640px) {
        font-size: 1.22rem;
    }
`;

export const StyledQuestion = styled(StyledParagraph)`
    font-weight: 400;
    font-size: 1.27rem;
    line-height: 110%;
    letter-spacing: 0.025em;

    @media (max-width: 640px) {
        font-size: 1rem;
    }
`;

export const StyledBodyLarge = styled(StyledParagraph)`
    font-weight: 400;
    font-size: 1.09rem;
    line-height: 120%;
    letter-spacing: 0.025em;

    @media (max-width: 640px) {
        font-size: 1rem;
    }
`;

export const StyledBody = styled(StyledParagraph)`
    font-weight: 400;
    font-size: 1rem;
    line-height: 140%;
    letter-spacing: 0.025em;

    @media (max-width: 640px) {
        font-size: 1rem;
    }
`;

export const StyledBodyCompact = styled(StyledParagraph)`
    font-weight: 400;
    font-size: 1rem;
    line-height: 110%;
    letter-spacing: 0.025em;
`;
