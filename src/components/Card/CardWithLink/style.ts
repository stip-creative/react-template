import styled from "styled-components";

import { ReactComponent as LinkArrow } from "../../../static/linkArrow.svg";
import colors from "../../../styles/variables";

export const StyledLink = styled.a`
    text-decoration: none;
`;

export const StyledLinkArrow = styled(LinkArrow)`
    align-self: flex-end;
    path {
        fill: ${colors.blue};
        transition: fill 0.6s cubic-bezier(0.25, 0.25, 0, 1);
        will-change: fill;
    }
`;

export const StyledDescriptionWrapper = styled.div`
    h4 {
        transition: color 0.5s cubic-bezier(0.25, 0.25, 0, 1);
        will-change: color;
    }

    p {
        transition: color 0.5s cubic-bezier(0.25, 0.25, 0, 1);
        will-change: color;
        margin-top: 0.68rem;
    }
`;

export const StyledCard = styled.div`
    padding: 1.59rem 1.36rem;

    position: relative;
    width: 20.9rem;
    height: 20rem;

    border: 1px solid ${colors.lightGrey};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;

    cursor: pointer;

    transition: background-color 0.6s cubic-bezier(0.25, 0.25, 0, 1);
    will-change: background-color;

    &:hover {
        background-color: ${colors.blue};

        h4 {
            color: ${colors.white};
        }

        p {
            color: ${colors.white};
        }

        path {
            fill: ${colors.white};
        }
    }

    @media (max-width: 640px) {
        padding: 1.38rem 1.11rem;
        width: 18.44rem;
        height: 18.44rem;
    }
`;
