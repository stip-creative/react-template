import styled from "styled-components";

import { ReactComponent as Burger } from "../../static/burger.svg";
import { ReactComponent as Arrow } from "../../static/arrow-form.svg";
import ButtonType from "../../models/ButtonType";
import colors from "../../styles/variables";

export const StyledButton = styled.button<{
    type?: ButtonType;
    isSmall: boolean;
    withSvg: boolean;
}>`
    min-width: 11.81rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: ${({ isSmall }) => (isSmall ? "0.72rem 1.36rem" : "1.09rem 1.36rem")};

    background: ${({ type }) => (type === ButtonType.primary ? colors.blue : "transparent")};
    border-radius: 35px;
    border: solid 1px ${({ type }) => (type === ButtonType.primary ? colors.blue : colors.lightGrey)};

    display: flex;
    align-items: center;
    align-content: center;
    justify-content: ${({ withSvg }) => (withSvg ? "space-between" : "center")};

    @keyframes in-right {
        0% {
            transform: translate(100%, 0px);
        }
        100% {
            transform: translate(0, 0px);
        }
    }

    @keyframes out-right {
        0% {
            transform: translate(0, 0px);
        }
        100% {
            transform: translate(100%, 0px);
        }
    }

    @keyframes in-left {
        0% {
            transform: translate(-100%, 0px);
        }
        100% {
            transform: translate(0, 0px);
        }
    }

    @keyframes out-left {
        0% {
            transform: translate(0, 0px);
        }
        100% {
            transform: translate(-100%, 0px);
        }
    }

    &:before {
        content: " ";
        position: absolute;
        border-radius: inherit;
        top: -1px;
        left: -1px;
        bottom: -1px;
        right: -1px;
        background-color: ${colors.blueHovered};
        pointer-events: none;
        transform: translate(100%, 0px);
    }

    &.in-right {
        &:before {
            animation: in-right 0.3s cubic-bezier(0.25, 0.25, 0, 1) 0ms 1 forwards;
        }
        span {
            color: ${colors.white};
        }
    }

    &.out-right {
        &:before {
            animation: out-right 0.3s cubic-bezier(0.25, 0.25, 0, 1) 0ms 1 forwards;
        }
    }

    &.in-left {
        &:before {
            animation: in-left 0.3s cubic-bezier(0.25, 0.25, 0, 1) 0ms 1 forwards;
        }
        span {
            color: ${colors.white};
        }
    }

    &.out-left {
        &:before {
            animation: out-left 0.3s cubic-bezier(0.25, 0.25, 0, 1) 0ms 1 forwards;
        }
    }

    & > * {
        transition: color 0.3s cubic-bezier(0.25, 0.25, 0, 1);
        position: relative;
        color: ${({ type }) => (type === ButtonType.primary ? colors.white : colors.black)};
    }

    @media (max-width: 640px) {
        width: 100%;
        height: 2.77rem;
    }
`;

export const StyledButtonHover = styled(StyledButton)``;

export const StyledBurger = styled(Burger)``;

export const StyledArrow = styled(Arrow)`
    margin-left: 0.68rem;
`;
