import styled from "styled-components";

import colors from "../../../styles/variables";

export const StyledWrapper = styled.article<{ reverse: boolean }>`
    display: flex;
    flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    margin: ${({ reverse }) => (reverse ? "4.09rem 6.36rem 0 0" : "4.09rem 0 0 6.36rem")};

    figure {
        margin: ${({ reverse }) => (reverse ? "0 0 0 4.31rem" : "0 4.31rem 0 0")};

        @media (max-width: 640px) {
            margin: 0 0 1.11rem;
        }
    }

    @media (max-width: 640px) {
        margin: 0;
        margin-bottom: 3.44rem;
        flex-direction: column;
    }
`;

export const StyledFigure = styled.figure`
    aspect-ratio: 1/1;
    flex: 0 0 41%;
    max-width: 25.45rem;
    overflow: hidden;
`;

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
`;

export const StyledDescriptionWrapper = styled.div`
    flex: 0 0 50%;
    max-width: 23.63rem;

    h3 {
        margin-bottom: 0.9rem;
    }

    @media (max-width: 640px) {
        h3 {
            margin-bottom: 0.45rem;
        }
    }
`;

export const StyledCircle = styled.div`
    width: 1.13rem;
    height: 1.13rem;
    border-radius: 50%;
    background: ${colors.blue};
    margin-top: 1.81rem;

    @media (max-width: 640px) {
        margin-top: 1.11rem;
    }
`;
