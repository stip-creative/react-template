import { createGlobalStyle } from "styled-components";

import { setFontSize, setMobileFontSize } from "./variables";

// import colors from "./variables";

const GlobalStyles = createGlobalStyle`
    html {
        font-size: ${setFontSize(22)};

        @media (max-width: 640px) {
            font-size: ${setMobileFontSize(18)};
        }
    }
`;

export default GlobalStyles;
