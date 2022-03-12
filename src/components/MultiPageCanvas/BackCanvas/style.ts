import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -1;
    pointer-events: none;
`;

export default StyledCanvasWrapper;
