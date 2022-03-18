import { Canvas as ReactThreeCanvas } from "@react-three/fiber";
import React, { FunctionComponent, Suspense } from "react";

import StyledCanvasWrapper from "./style";

export interface ICanvas {
    transitionStatus: PageTransitionStatus;
}

const BackCanvas: FunctionComponent = () => {
    return (
        <StyledCanvasWrapper>
            <ReactThreeCanvas orthographic>
                <Suspense fallback={null}>{/*   */}</Suspense>
            </ReactThreeCanvas>
        </StyledCanvasWrapper>
    );
};

export default BackCanvas;
