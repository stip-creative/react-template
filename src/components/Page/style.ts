import styled from "styled-components";

const StyledPageWrapper = styled.main`
    position: absolute;
    width: 100%;
    min-height: calc(100% - 60px);
    background-color: var(--bg);
    will-change: transform;
`;

export default StyledPageWrapper;
