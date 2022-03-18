import { createGlobalStyle } from "styled-components";

import KenokyWoff from "../fonts/KenokyLight.woff";
import KenokyWoff2 from "../fonts/KenokyLight.woff2";

import colors from "./variables";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Kenoky';
        src: url(${KenokyWoff2}) format('woff2'),
            url(${KenokyWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    body {
        --bg: ${colors.black};
        --text: ${colors.lightYellow};
        --preloaderText: ${colors.brown};
        background-color: var(--bg);
        color: var(--text);
    }
`;

export default GlobalStyles;
