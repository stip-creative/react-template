import styled from "styled-components";

import colors from "../../styles/variables";
import { StyledInst, StyledVk, StyledYouTube } from "../Footer/style";

export const StyledWrapper = styled.section`
    margin: 7.27rem 4.09rem 0;
    background: ${colors.white};
    display: flex;

    @media (max-width: 640px) {
        margin: 5.55rem 0 0;
        flex-direction: column;
    }
`;

export const StyledBlock = styled.div`
    &:first-child {
        max-width: 15.45rem;
        flex: 1 0 15.45rem;

        margin-right: 0.9rem;

        h3 {
            margin-bottom: 2.45rem;
        }
    }

    &:last-child {
        flex: 1 0 calc(100% - 15.45rem);
    }

    @media (max-width: 640px) {
        &:first-child {
            max-width: none;
            flex: auto;
            margin: 0 0.88rem 0;

            h3 {
                margin-bottom: 1.11rem;
            }
        }
    }
`;

export const StyledSocialMediaWrapper = styled.div`
    margin-bottom: 2.45rem;
    height: 2.61rem;
    display: flex;
    justify-content: flex-end;

    a {
        width: 30px;
        height: 30px;
        margin-left: 0.9rem;

        svg {
            path {
                fill: ${colors.black};
            }
        }
    }

    @media (max-width: 640px) {
        justify-content: flex-start;

        a {
            margin-left: 0;
            margin-right: 0.9rem;

            &:first-child {
                margin-left: 0.88rem;
            }
        }
    }
`;

export const StyledMapWrapper = styled.div`
    position: relative;
    aspect-ratio: 16/9;
    width: 100%;

    .y-map {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }

    @media (max-width: 640px) {
        height: 60vh;
        aspect-ratio: initial;
    }
`;

export const StyledContactInst = styled(StyledInst)``;

export const StyledContactVk = styled(StyledVk)``;

export const StyledContactYouTube = styled(StyledYouTube)``;

export const StyledInfoBlock = styled.div`
    margin-bottom: 1.36rem;

    p:first-child {
        margin-top: 0.22rem;
        opacity: 0.5;
    }
`;

export const StyledPhoneLink = styled.a`
    text-decoration: none;

    p {
        opacity: 1 !important;
    }
`;
