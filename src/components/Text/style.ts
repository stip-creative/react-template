import styled from "styled-components";

import colors from "../../styles/variables";

export const StyledText = styled.p`
    font-family: "Manrope", sans-serif;
    color: ${colors.black};
    font-style: normal;
    font-size: 1rem;
`;

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
