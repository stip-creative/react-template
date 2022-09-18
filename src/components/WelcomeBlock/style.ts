import styled from "styled-components";

import colors from "../../styles/variables";
import { StyledButton } from "../Button/style";

export const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 4.1rem;
    display: flex;
    background: ${colors.lightBlue};

    @media (max-width: 640px) {
        padding: 0 0.88rem;
        justify-content: flex-end;
        flex-direction: column-reverse;
    }
`;

export const StyledHalf = styled.div`
    display: flex;
    flex: 0 1 50%;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
`;

export const StyledSubTitleWrapper = styled.div`
    width: 23.63rem;
    margin-top: 1.155rem;

    @media (max-width: 640px) {
        width: 100%;
    }
`;

export const StyledButtonWrapper = styled.div`
    margin-top: 1.36rem;
    display: flex;

    ${StyledButton} {
        margin-right: 0.45rem;
    }

    @media (max-width: 640px) {
        flex-direction: row;
        flex-wrap: wrap;

        ${StyledButton} {
            margin-right: 0;
            margin-bottom: 0.55rem;
            width: 100%;
            height: 2.77rem;
        }
    }
`;

export const StyledFigure = styled.figure`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
        padding-top: 3.88rem;
    }
`;

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
