import styled from "styled-components";

import { ReactComponent as Minus } from "../../../static/minus.svg";
import colors from "../../../styles/variables";

export const StyledWrapper = styled.div`
    padding: 1.36rem 0;
`;

export const StyledTitleWrapper = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    @media (max-width: 640px) {
        p {
            flex: 0 0 80%;
        }
    }
`;

export const StyledLine = styled.div`
    widht: 100%;
    height: 1px;
    background: ${colors.lightGrey};
`;

export const StyledCircle = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: ${colors.blue};

    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    position: relative;

    @media (max-width: 640px) {
        flex: 0 1 45px;
    }
`;

export const StyledMinus = styled(Minus)``;

export const StyledMinusSecond = styled(Minus)`
    position: absolute;
    transform: rotateZ(90deg);

    transition: opacity 0.5s cubic-bezier(0.25, 0.25, 0, 1);
`;

export const StyledTextWrapper = styled.div`
    padding: 0.77rem 0 0;
    opacity: 0.7;

    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
`;

export const StyledHiddenWrapper = styled.div`
    overflow: hidden;
    transition: max-height 0.5s cubic-bezier(0.25, 0.25, 0, 1);
`;
