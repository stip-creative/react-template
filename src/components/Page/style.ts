import styled from "styled-components";

import colors from "../../styles/variables";

const StyledPageWrapper = styled.main`
    position: absolute;
    width: 100%;
    min-height: calc(100% - 60px);
    background-color: ${colors.white};
    will-change: transform;
`;

export default StyledPageWrapper;
