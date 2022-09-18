import styled from "styled-components";

import { ReactComponent as Quotes } from "../../../static/quotes.svg";

export const StyledReview = styled.div`
    width: 43.54rem;
    margin-left: 4.5rem;
    margin-top: 1.69rem;

    @media (max-width: 640px) {
        width: calc(100vw - 1.76rem);
        margin-top: 0;
        margin-left: 0.88rem;
        margin-right: 0.88rem;
        padding-left: 0;
        padding-top: 4.44rem;
    }
`;

export const StyledOwner = styled.div`
    margin-left: 2.86rem;
    margin-top: 1.59rem;
    display: flex;

    @media (max-width: 640px) {
        margin: 1.11rem 0;
    }
`;

export const StyledFigure = styled.figure`
    overflow: hidden;
    width: 3.4rem;
    height: 3.4rem;
    border-radius: 50%;

    @media (max-width: 640px) {
        width: 2.77rem;
        height: 2.77rem;
    }
`;

export const StyledImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const StyledOwnerDescription = styled.div`
    margin-left: 0.72rem;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    align-content: flex-start;

    p:last-child {
        opacity: 0.5;
    }
`;

export const StyledQuotes = styled(Quotes)`
    position: absolute;
    left: 0;
    top: 0;
`;

export const StyledReviewWrapper = styled.div`
    position: relative;

    p {
        margin-left: 2.86rem;
    }
`;
