import styled from "styled-components";

import colors from "../../../styles/variables";
import { StyledText } from "../style";

export const StyledH1 = styled(StyledText).attrs({
    as: "h1",
})`
    font-weight: 500;
    line-height: 110%;
    font-size: 3.19rem;
    letter-spacing: -0.053em;

    b {
        color: ${colors.blue};
    }

    & > span {
        white-space: nowrap;
    }

    .parent {
        will-change: transform;
        overflow: hidden;
        display: inline-flex;
        letter-spacing: normal;

        span,
        b {
            will-change: transform;
            display: inline-flex;
        }
    }

    @media (max-width: 640px) {
        font-size: 1.67rem;
    }
`;

export const StyledH2 = styled(StyledH1).attrs({
    as: "h2",
})`
    font-weight: 600;
    font-size: 2.18rem;
    line-height: 135%;
    letter-spacing: -0.025em;
    font-feature-settings: "ordn" on;

    @media (max-width: 640px) {
        font-size: 1.44rem;
    }
`;

export const StyledH3 = styled(StyledH1).attrs({
    as: "h3",
})`
    font-weight: 600;
    font-size: 2.18rem;
    line-height: 120%;
    letter-spacing: -0.02em;
    font-feature-settings: "ordn";

    @media (max-width: 640px) {
        font-size: 1.22rem;
    }
`;
