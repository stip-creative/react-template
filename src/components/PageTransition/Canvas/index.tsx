import { Canvas as ReactThreeCanvas } from "@react-three/fiber";
import React, { FunctionComponent, Suspense } from "react";

import PageTransitionStatus from "../../../models/PageTransitionStatus";
import Plane from "../Plane";

import StyledCanvasWrapper from "./style";

export interface ICanvas {
    transitionStatus: PageTransitionStatus;
}

const Canvas: FunctionComponent<ICanvas> = ({ transitionStatus }) => {
    return (
        <StyledCanvasWrapper>
            <ReactThreeCanvas orthographic>
                <Suspense fallback={null}>
                    {/* // todo: set loader */}
                    <Plane transitionStatus={transitionStatus} />
                </Suspense>
            </ReactThreeCanvas>
        </StyledCanvasWrapper>
    );
};

export default Canvas;
