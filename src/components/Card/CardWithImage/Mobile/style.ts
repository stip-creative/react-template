import styled from "styled-components";

import { StyledCard } from "../style";

export const StyledCardMobile = styled(StyledCard)`
    width: 18.44rem;
    height: 17.44rem;
`;

export const StyledDescriptionWrapper = styled.div`
    h4 {
        margin-top: 0.83rem;
    }

    p {
        margin-top: 0.27rem;
    }
`;

export const StyledFigure = styled.figure`
    overflow: hidden;
    width: 100%;
`;

export const StyledImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;
