import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../static/headerLogo.svg";
import colors from "../../styles/variables";

export const StyledWrapper = styled.header`
    width: 100%;
    max-height: 80px;
    background: ${colors.white};
    padding: 0.68rem 1.81rem;
    position: fixed;
    z-index: 100;
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

export const StyledLinkWrapper = styled.div`
    display: flex;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin-right: 2.045rem;

    &:last-child {
        margin-left: 0rem;
    }
`;
