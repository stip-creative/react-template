import styled from "styled-components";

import { ReactComponent as Close } from "../../static/sidebar-close.svg";
import colors from "../../styles/variables";

export const StyledBg = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.25);
    touch-action: pan-y;
    z-index: 100;
    pointer-events: none;
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.25, 0.25, 0, 1);

    &.show {
        pointer-events: auto;
        opacity: 1;
    }
`;

export const StyledSidebarWrapper = styled.div`
    background-color: ${colors.white};
    width: 31.81rem;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 101;
    opacity: 0;
    transform: translate(100%, 0px);
    transition: all 0.4s cubic-bezier(0.25, 0.25, 0, 1);

    padding: 8.18rem 4.09rem;

    h3 {
        margin-bottom: 2.27rem;
    }

    button {
        max-width: 15.22rem;
    }

    &.show {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    @media (max-width: 640px) {
        padding: 0.88rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        button {
            justify-content: center;
            max-width: initial;
        }

        button:last-child {
            margin-top: 0.55rem;
        }
    }
`;

export const StyledClose = styled(Close)`
    position: absolute;
    top: 0.68rem;
    right: 1.81rem;
    cursor: pointer;
`;
