import styled from "styled-components";

import colors from "../../../styles/variables";

interface IProps {
    $isValid: boolean | null;
}

export const StyledLine = styled.div`
    height: 1px;
    width: 23.63rem;
    background: ${colors.lightGrey};

    transition: background 0.6s cubic-bezier(0.25, 0.25, 0, 1);
    will-change: background;

    @media (max-width: 640px) {
        width: 100%;
    }
`;

export const StyledLabel = styled.label<IProps>`
    display: block;
    margin-top: 1.36rem;

    ${StyledLine} {
        background: ${({ $isValid }) => {
            if ($isValid === null) {
                return colors.lightGrey;
            }
            if ($isValid) {
                return colors.blue;
            }

            return colors.red;
        }};
    }

    p {
        opacity: 0.5;
    }

    ${StyledLine} + p {
        margin-top: 0.45rem;
        color: ${colors.red};
        opacity: 1;
    }
`;

export const StyledInput = styled.input<Props>`
    width: 23.63rem;
    height: 2.045rem;

    margin-top: 0.45rem;
    padding: 0;
    border: none;

    font-family: "Manrope", sans-serif;
    color: ${colors.black};
    font-style: normal;
    font-weight: 400;
    font-size: 1.09rem;
    line-height: 120%;
    letter-spacing: 0.025em;

    &:focus-visible {
        outline: none;
    }

    &::placeholder {
        font-family: "Manrope", sans-serif;
        color: ${colors.grey};
        font-style: normal;
        font-weight: 400;
        font-size: 1.09rem;
        line-height: 120%;
        letter-spacing: 0.025em;
    }

    @media (max-width: 640px) {
        width: 100%;
    }
`;
