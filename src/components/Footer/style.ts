import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Inst } from "../../static/inst.svg";
import { ReactComponent as Vk } from "../../static/vk.svg";
import { ReactComponent as YouTube } from "../../static/youTube.svg";
import colors from "../../styles/variables";
import { ReactComponent as Footer } from "../../static/footer-logo.svg";
import StyledFullViewWrapper from "../FullViewWrapper/style";

export const StyledWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.black};
    padding: 2.27rem 4.09rem 1.9rem;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-start;

    button > * {
        color: ${colors.white};
    }

    @media (max-width: 640px) {
        padding: 3.33rem 0.88rem;
    }
`;

export const StyledLogo = styled(Footer)``;

export const StyledInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: space-between;
    align-items: flex-start;

    width: 100%;

    @media (max-width: 640px) {
        flex-direction: column;
    }
`;

export const StyledQuarter = styled.div`
    &:last-child {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-content: space-around;
        align-items: stretch;

        button:first-child {
            margin-bottom: 0.5rem;
        }
    }

    @media (max-width: 640px) {
        width: 100%;
        margin-top: 1.94rem;
    }
`;

export const StyledTitleWrapper = styled.div`
    p {
        color: ${colors.white};
        opacity: 0.5;
    }
`;

export const StyledPhoneWrapper = styled.div`
    p {
        color: ${colors.white};
        opacity: 1;
    }

    margin-top: 0.9rem;
`;

export const StyledPhoneLink = styled.a`
    text-decoration: none;
`;

export const StyledEmailLink = styled.a`
    color: ${colors.white};
    margin-top: 0.9rem;
    text-decoration: none;
    display: block;

    p {
        color: ${colors.white};
        opacity: 1;
    }
`;

export const StyledAddresWrapper = styled.div`
    color: ${colors.white};
    margin-top: 0.9rem;

    p {
        color: ${colors.white};
        opacity: 1;
    }
`;

export const StyledFooter = styled.div`
    p {
        color: ${colors.white};
        opacity: 1;
    }

    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;

    .half:first-child {
        display: flex;
    }

    @media (max-width: 640px) {
        flex-direction: column-reverse;
        margin-top: 2.5rem;

        .half:first-child {
            p {
                margin-bottom: 0.55rem;
            }

            a {
                margin: 0;
            }

            flex-direction: column-reverse;
        }

        .half:last-child {
            margin-bottom: 0.55rem;
        }
    }
`;

export const StyledPrivacyPolicy = styled.a`
    color: ${colors.white};
    text-decoration: none;
    margin-left: 3.09rem;

    p {
        color: ${colors.white};
        opacity: 0.5;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin-top: 0.68rem;
    display: block;

    p {
        display: inline-block;
        border-bottom: 1px solid ${colors.white};
        color: ${colors.white};
        padding: 0.22rem 0;
    }
`;

export const StyledInst = styled(Inst)``;

export const StyledVk = styled(Vk)``;

export const StyledYouTube = styled(YouTube)``;

export const StyledFooterFullViewWrapper = styled(StyledFullViewWrapper)`
    width: 100vw;
    height: 100vh;

    @media (max-width: 640px) {
        height: auto;
    }
`;
