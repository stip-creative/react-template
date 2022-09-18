import styled from "styled-components";

import colors from "../../styles/variables";
import { StyledCard } from "../Card/CardWithImage/style";

export const StyledWrapper = styled.section`
    margin: 9.09rem 4.09rem 0;
    background: ${colors.white};

    @media (max-width: 640px) {
        margin: 5.55rem 0.88rem 0;
    }
`;

export const StyledDescriptionWrapper = styled.div`
    max-width: 23.63rem;

    h3 {
        margin-bottom: 0.68rem;
    }

    p {
        margin-bottom: 1.59rem;
    }
`;

export const StyledCardList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    ${StyledCard} {
        margin-bottom: 1rem;
    }
`;
