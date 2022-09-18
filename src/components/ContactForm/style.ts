import styled from "styled-components";

import { StyledFigure } from "../Facts/Fact/style";

export const StyledWrapper = styled.div`
    width: 100%;
    height: fit-content;

    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    justify-content: flex-start;

    padding: 6.26rem 6.36rem;

    @media (max-width: 640px) {
        padding: 4.44rem 0.88rem;
        flex-direction: column;
    }
`;

export const StyledFormFigure = styled(StyledFigure)`
    flex: 0 0 50%;
    max-width: 27.27rem;
    margin-top: 6rem;
    margin-bottom: 6rem;

    @media (max-width: 640px) {
        flex: auto;
        margin: 0;
        margin-bottom: 1.11rem;
    }
`;

export const StyledFormWrapper = styled.div`
    max-width: 28.54rem;
    margin-left: 3.18rem;
    padding-top: 6rem;
    padding-bottom: 6rem;

    @media (max-width: 640px) {
        margin: 0;
        width: 100%;
        flex: auto;
        padding: 0;
    }
`;

export const StyledForm = styled.form`
    button {
        margin-top: 1.81rem;
    }
`;
