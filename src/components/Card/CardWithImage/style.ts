import styled from "styled-components";

import colors from "../../../styles/variables";
import { StyledBodyCompact } from "../../Text/Paragraph/style";

export const StyledDescriptionWrapper = styled.div`
    padding: 1.59rem 1.36rem;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    pointer-events: none;
    background-color: ${colors.blue};
    opacity: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-end;

    transition: opacity 0.4s cubic-bezier(0.25, 0.25, 0, 1);
    will-change: opacity;

    pointer-events: none;

    h4 {
        color: ${colors.white};
    }

    p {
        color: ${colors.white};
    }

    ${StyledBodyCompact} {
        opacity: 0.7;
        margin: 0.68rem 0;
    }
`;

export const StyledCard = styled.div`
    position: relative;
    width: 20.9rem;
    height: 20rem;

    border: 1px solid ${colors.lightGrey};

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
        ${StyledDescriptionWrapper} {
            opacity: 1;
        }
    }
`;

export const StyledFigure = styled.figure`
    overflow: hidden;
    width: 100%;
    pointer-events: none;
`;

export const StyledImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    pointer-events: none;
`;
