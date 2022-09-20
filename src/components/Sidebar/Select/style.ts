import styled from "styled-components";

import colors from "../../../styles/variables";

const StyledSelectLabel = styled.label`
    & > p {
        opacity: 0.5;
        font-size: 0.72rem;
    }

    .select__control {
        height: 2.5rem;
        border: none;
        border-bottom: 1px solid ${colors.lightGrey};

        margin-bottom: 1.59rem;

        outline: none !important;
        box-shadow: none;
    }

    .select__indicator-separator {
        display: none;
    }

    .select__placeholder {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 700;
        font-size: 1.09rem;
        line-height: 120%;
        letter-spacing: 0.015em;

        color: ${colors.lightGrey};
    }

    .select__single-value {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 120%;
        letter-spacing: 0.015em;

        color: ${colors.black};
        opacity: 1;
    }

    .select__value-container {
        padding: 0;
    }

    .select__menu {
        .select__option {
            font-family: "Manrope";
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 120%;
            letter-spacing: 0.015em;

            color: ${colors.black};
            opacity: 1;

            padding: 0.68rem 1.13rem;
        }

        .select__option:hover {
            background-color: ${colors.light};
            color: ${colors.blue};
        }

        .select__option--is-selected {
            background-color: ${colors.blue};
            color: ${colors.white};
        }
    }
`;

export default StyledSelectLabel;
