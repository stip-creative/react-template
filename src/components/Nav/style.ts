import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavWrapper = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    height: 60px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);

    z-index: 1;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    margin-left: 2rem;

    &:first-child {
        margin: 0;
    }
`;
