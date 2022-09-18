import styled from "styled-components";

import colors from "../../styles/variables";
import { StyledButton } from "../Button/style";
import { StyledH3 } from "../Text/MainTitle/style";
import { StyledBody } from "../Text/Paragraph/style";
import StyledFullViewWrapper from "../FullViewWrapper/style";

export const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;

    @media (max-width: 640px) {
        flex-direction: column;
        position: initial;
    }
`;

export const StyledThird = styled.div`
    background: ${colors.black};
    flex: 0 0 38%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    padding-left: 4.09rem;
    max-width: 27.72rem;

    & > div {
        max-width: 15.45rem;
    }

    ${StyledH3} {
        margin-top: 2.5rem;
        color: ${colors.white};
    }

    ${StyledBody} {
        margin-top: 1.36rem;
        color: ${colors.white};
    }

    ${StyledButton} {
        max-width: 11.81rem;
        margin-bottom: 1.81rem;
    }

    @media (max-width: 640px) {
        padding: 2.22rem 0.88rem;

        & > div {
            width: 100%;
            max-width: initial;
        }

        ${StyledH3} {
            margin-top: 0;
            margin-bottom: 0.83rem;
        }

        ${StyledBody} {
            margin-top: 0.83rem;
        }

        ${StyledButton} {
            max-width: initial;
            margin-top: 2rem;
            margin-bottom: 0;
        }
    }
`;

export const StyledTwoThird = styled.div`
    background: ${colors.lightBlue};
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media (max-width: 640px) {
        flex-direction: column;
        flex-wrap: nowrap;
    }
`;

export const StyledFourth = styled.div`
    flex: 0 0 50%;
    height: 50%;

    position: relative;
    display: flex;
    flex-direction: row;
    align-content: flex-end;
    align-items: flex-end;
    justify-content: flex-start;
    flex-wrap: nowrap;

    &:first-child {
        border-right: 1px solid #d7dfea;
        border-bottom: 1px solid #d7dfea;
    }

    &:nth-child(2) {
        border-bottom: 1px solid #d7dfea;
    }

    &:nth-child(3) {
        border-right: 1px solid #d7dfea;
    }

    @media (max-width: 640px) {
        padding: 2.22rem 0.88rem;
        flex-direction: column;
        align-content: flex-start;
        align-items: flex-start;
        border-bottom: 1px solid #d7dfea;

        flex: auto;
        height: auto;

        &:first-child {
            border-right: none;
        }

        &:last-child {
            border-left: none;
            border-top: none;
        }
    }
`;

export const StyledFigure = styled.figure`
    aspect-ratio: 1/1;
    max-width: 6.77rem;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: 640px) {
        max-width: 2.5rem;
        position: relative;
    }
`;

export const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    will-change: transform;
`;

export const StyledTextWrapper = styled.div`
    margin: 0 4.7rem 1.36rem 1.36rem;

    h4 {
        margin-bottom: 0.68rem;
    }

    @media (max-width: 640px) {
        margin: 0;
        margin-top: 1.11rem;q
    }
`;

export const StyledAboutCoursesFullViewWrapper = styled(StyledFullViewWrapper)`
    width: 100vw;
    height: auto;
    max-height: 100vh;
    margin-top: 11.18rem;
    padding-top: 56.25%;
    position: relative;

    @media (max-width: 640px) {
        max-height: initial;
        height: auto;
        position: initial;

        margin-top: 4.44rem;
        padding-top: initial;
    }
`;
