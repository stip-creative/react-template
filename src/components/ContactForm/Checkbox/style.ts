import styled from "styled-components";

import colors from "../../../styles/variables";

export const StyledCheckmarkWrapper = styled.div<{ isValid: boolean | null }>`
    min-width: 1.13rem;
    width: 1.13rem;
    height: 1.13rem;
    border: 1px solid ${({ isValid }) => (isValid === false ? colors.red : colors.blue)};
    margin-right: 0.5rem;

    transition: border 0.6s cubic-bezier(0.25, 0.25, 0, 1);
    will-change: border;
`;

export const StyledCheckbox = styled.div<{ isValid: boolean | null }>`
    margin-top: 1.81rem;

    span {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 140%;
        letter-spacing: 0.025rem;
        color: ${({ isValid }) => (isValid === false ? colors.red : colors.black)};
        opacity: ${({ isValid }) => (isValid === false ? 1 : 0.4)};
    }

    input {
        display: none;
    }

    input[type="checkbox"]:checked + label {
        ${StyledCheckmarkWrapper} {
            border: 7px solid blue;
        }
    }

    label {
        display: flex;
        align-items: center;
        align-content: center;
    }
`;

export const StyledLink = styled.a`
    font-family: inherit;
    color: inherit;
`;
