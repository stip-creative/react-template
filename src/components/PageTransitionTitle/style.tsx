import styled from "styled-components";

export const StyledWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    z-index: 2;
    pointer-events: none;
`;

export const StyledTitle = styled.h2`
    font-family: "Kenoky";
    font-size: 6.4rem;
    line-height: 1;
    overflow: hidden;
    color: var(--preloaderText);
    text-transform: uppercase;

    span {
        opacity: 0;
    }
`;
