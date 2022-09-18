import styled from "styled-components";

import colors from "../../../styles/variables";
import StyledSelectLabel from "../../Sidebar/Select/style";

export const StyledWrapper = styled.div`
    margin: 0;

    & > h3 {
        margin: 8.63rem 4.09rem 1.81rem;
    }

    @media (max-width: 640px) {
        & > h3 {
            margin: 4.44rem 0.88rem 1.11rem;
        }
    }
`;

export const StyledContentWrapper = styled.div`
    display: flex;
    aspect-ratio: 16/9;

    @media (max-width: 640px) {
        aspect-ratio: auto;
        flex-direction: column;
    }
`;

export const StyledMapWrapper = styled.div`
    aspect-ratio: 16/9;
    position: relative;
    flex: 0 1 calc(100% - 27.45rem);
    max-width: calc(100% - 27.45rem);

    .y-map {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    @media (max-width: 640px) {
        aspect-ratio: auto;
        flex: 1 1 60vh;
        width: 100%;
        max-width: initial;
    }
`;

export const StyledOfficeWrapper = styled.div`
    padding: 2.5rem 2.72rem 0;
    flex: 1 0 27.45rem;
    max-width: 27.45rem;
    background-color: ${colors.black};

    h4 {
        color: ${colors.white};
        margin-bottom: 2.27rem;
    }

    ${StyledSelectLabel} {
        color: ${colors.white};

        & > p {
            color: ${colors.white};
        }

        .select__control {
            background-color: ${colors.black};
        }

        .select__single-value {
            color: ${colors.white};
        }
    }

    @media (max-width: 640px) {
        padding: 2.22rem 0.88rem;
        flex: 1 1 100vh;

        h4 {
            margin-bottom: 0.83rem;
        }
    }
`;

export const StyledOfficeScheduleList = styled.div`
    position: relative;
`;

export const StyledOfficeScheduleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

export const StyledOfficeSchedule = styled.div`
    border-bottom: 1px solid ${colors.lightGrey};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.13rem 0;

    p {
        color: ${colors.white};
    }
`;
