import styled from "styled-components";
import { Link } from "wouter";

export const StyledNavWrapper = styled.div`
    display: flex;
    height: 60px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    margin-left: 2rem;

    &:first-child {
        margin: 0;
    }
`;
