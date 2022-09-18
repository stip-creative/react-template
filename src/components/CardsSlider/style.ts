import styled from "styled-components";

export const StyledWrapper = styled.section`
    padding: 10rem 0 0 0;

    .slick-list {
        padding-left: 4.09rem;

        @media (max-width: 640px) {
            padding-left: 0;
            margin-left: 0.88rem;
            margin-left: 0.88rem;
            padding-top: 4.44rem;
        }
    }

    .slick-slide {
        max-width: 21.81rem !important;

        @media (max-width: 640px) {
            max-width: auto;
            /* margin-right: 0.55rem !important; */
        }
    }

    @media (max-width: 640px) {
        padding: 4rem 0 0 0;
    }
`;

export const StyledDescriptionWrapper = styled.div`
    margin-left: 4.09rem;
    max-width: 23.63rem;

    p {
        margin: 0.68rem 0 1.59rem;
    }

    @media (max-width: 640px) {
        margin: 0 0.88rem;
    }
`;
