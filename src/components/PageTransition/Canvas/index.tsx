import { Canvas as ReactThreeCanvas } from "@react-three/fiber";
import React, { FunctionComponent, Suspense } from "react";

import PlaneStatus from "../../../models/PlaneStatus";
import Plane from "../Plane";

import StyledCanvasWrapper from "./style";

export interface ICanvas {
    planeStatus: PlaneStatus;
}

const Canvas: FunctionComponent<ICanvas> = ({ planeStatus }) => {
    return (
        <StyledCanvasWrapper>
            <ReactThreeCanvas orthographic>
                <Suspense fallback={null}>
                    {/* // todo: set loader */}
                    <Plane planeStatus={planeStatus} />
                </Suspense>
            </ReactThreeCanvas>
        </StyledCanvasWrapper>
    );
};

export default Canvas;
