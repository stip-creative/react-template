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
        transition: opacity 1s cubic-bezier(0.25, 0.25, 0, 1);
        will-change: opacity;

        &.show {
            transition: opacity 0.4s cubic-bezier(0.25, 0.25, 0, 1);

            opacity: 1;
        }

        &.hide {
            opacity: 0;
        }
    }
`;

export default GlobalStyles;
