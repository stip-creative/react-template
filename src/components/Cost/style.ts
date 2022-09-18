import styled from "styled-components";

import colors from "../../styles/variables";

export const StyledWrapper = styled.section`
    padding: 7.27rem 4.09rem 0;

    @media (max-width: 640px) {
        padding: 3.63rem 0 0;
    }
`;

export const StyledTitleWrapper = styled.div`
    margin-bottom: 3.18rem;

    @media (max-width: 640px) {
        margin: 0 0.88rem 1.5rem;
    }
`;

export const StyledBlock = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    align-items: stretch;
    justify-content: flex-start;

    height: 18.09rem;

    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        height: auto;
    }
`;

export const StyledBlueTile = styled.div`
    background-color: ${colors.blue};
    flex: 1 1 50%;

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    h3 {
        text-align: center;
        color: ${colors.white};
    }

    @media (max-width: 640px) {
        padding: 2.22rem 0;
    }
`;

export const StyledTile = styled.div`
    background-color: ${colors.light};
    flex: 1 1 50%;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: flex-start;
    align-items: flex-start;
`;

export const StyledTileHalf = styled.div`
    flex: 1 1 50%;

    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: center;

    h3 {
        color: ${colors.blue};
        margin-bottom: 0.45rem;
    }

    p {
        text-align: center;
    }

    @media (max-width: 640px) {
        &:first-child {
            margin: 2.22rem 0 1.38rem;
        }

        &:last-child {
            margin: 1.38rem 0 2.22rem;
        }
    }
`;

export const StyledLine = styled.div`
    height: 1px;
    width: 100%;
    background-color: ${colors.lightGrey};
    margin: 0 3.18rem;
    width: calc(100% - 6.36rem);

    @media (max-width: 640px) {
        margin: 0 0.88rem;
        width: calc(100% - 1.77rem);
    }
`;
