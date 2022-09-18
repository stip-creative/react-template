import styled from "styled-components";

export const StyledWrapper = styled.section`
    padding: 10rem 0 0;

    h3 {
        margin-bottom: 2.5rem;
    }

    .slick-list {
        width: 50.54rem;
        margin: auto;
    }

    @media (max-width: 640px) {
        padding: 4.44rem 0 0;
        overflow: hidden;
    }
`;

export const StyledDescriptionWrapper = styled.div`
    margin-left: 4.09rem;
    max-width: 23.63rem;

    @media (max-width: 640px) {
        margin-left: 0.88rem;
        max-width: auto;
    }
`;
