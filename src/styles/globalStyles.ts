import { createGlobalStyle } from "styled-components";

import colors, { setFontSize, setMobileFontSize } from "./variables";

const GlobalStyles = createGlobalStyle`
    html {
        font-size: ${setFontSize(22)};

        @media (max-width: 640px) {
            font-size: ${setMobileFontSize(18)};
        }
    }

    #fade {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-color: ${colors.white};
        z-index: 101;
        pointer-events: none;
        opacity: 1;
        transition: opacity 0.2s cubic-bezier(0.2, 0, 0.38, 0.9);
        will-change: opacity;

        &.show {
            opacity: 1;
        }

        &.hide {
            opacity: 0;
        }
    }
`;

export default GlobalStyles;
