import styled from "styled-components";

const StyledWrapper = styled.div`
    margin: 9.09rem 4.09rem 0;

    & > h3 {
        margin-bottom: 1.81rem;
    }

    & > div {
        aspect-ratio: 16/9;
        position: relative;
    }

    .y-map {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    & > div {
        height: 100vh;
        aspect-ratio: initial;
    }

    @media (max-width: 640px) {
        margin: 4.44rem 0 0;

        & > h3 {
            margin: 0 0.88rem 1.11rem;
        }

        & > div {
            height: 60vh;
        }
    }
`;

export default StyledWrapper;
