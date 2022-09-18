import styled from "styled-components";

import { StyledText } from "../style";

export const StyledBodySmall = styled(StyledText)`
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 120%;
    letter-spacing: 0.025em;
`;

export const StyledBodyXSmall = styled(StyledText)`
    font-weight: 400;
    font-size: 0.81rem;
    line-height: 130%;

    @media (max-width: 640px) {
        font-size: 1rem;
    }
`;

export const StyledButtons = styled(StyledText).attrs({
    as: "span",
})`
    font-weight: 600;
    font-size: 0.9rem;
    line-height: 135%;
    letter-spacing: 0.01em;
`;

export const StyledButtonsSmall = styled(StyledText).attrs({
    as: "span",
})`
    font-weight: 600;
    font-size: 0.72rem;
    line-height: 100%;
`;
