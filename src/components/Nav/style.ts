import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavWrapper = styled.div`
    display: flex;
    height: 60px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: var(--bg);
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    margin-left: 2rem;

    &:first-child {
        margin: 0;
    }
`;
