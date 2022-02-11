import { createGlobalStyle } from "styled-components";

import colors from "./variables";

const GlobalStyles = createGlobalStyle`
    body {
        --bg: ${colors.black};
        --text: ${colors.lightYellow};

        background-color: var(--bg);
        color: var(--text);
    }
`;

export default GlobalStyles;
