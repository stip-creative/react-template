import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../../static/mobile-header-logo.svg";
import { ReactComponent as MobileMenu } from "../../../static/mobile-menu.svg";
import { ReactComponent as MobileClose } from "../../../static/mobile-close.svg";
import colors from "../../../styles/variables";

export const StyledWrapper = styled.header`
    width: 100%;
    max-height: 3.88rem;
    background: ${colors.white};
    padding: 0.88rem;
    position: fixed;
    z-index: 102;
    transition: transform 0.6s cubic-bezier(0.25, 0.25, 0, 1);
    will-change: transform;

    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;

    &.scroll-up {
        transform: translateY(0%);
    }

    &.scroll-down {
        transform: translateY(-100%);
    }
`;

export const StyledLogo = styled(Logo)`
    height: 100%;
    width: auto;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0rem;

    &.active h2 {
        color: ${colors.blue};
    }
`;

export const StyledLinkButton = styled.div`
    text-decoration: none;
    margin: 0rem;
    padding: 0.44rem 0.88rem;
    cursor: pointer;
`;

export const StyledMobileMenu = styled(MobileMenu)`
    position: absolute;
    right: 0.88rem;
    top: 0.88rem;
`;

export const StyledMobileClose = styled(MobileClose)`
    position: absolute;
    right: 0.88rem;
    top: 0.88rem;
`;

export const StyledFade = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${colors.white};
    z-index: 101;
    pointer-events: none;
`;

export const StyledMobileSideMenu = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: ${colors.white};
    z-index: 101;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;

    a {
        padding: 0.44rem 0.88rem;
    }
`;
