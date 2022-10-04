import styled from "styled-components";

import colors from "../../styles/variables";

const StyledPageWrapper = styled.main`
    position: absolute;
    width: 100%;
    min-height: calc(100% - 60px);
    background-color: ${colors.white};
    will-change: transform;
`;

export const StyledFrame = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 100;
    pointer-events: none;
`;

export default StyledPageWrapper;
