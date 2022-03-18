import { Canvas as ReactThreeCanvas } from "@react-three/fiber";
import React, { FunctionComponent, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router";

import PageTransitionStatus from "../../../models/PageTransitionStatus";

import TorusKnotGeometry from "./TorusKnot";
import StyledCanvasWrapper from "./style";

export interface ICanvas {
    transitionStatus: PageTransitionStatus;
}

const BackCanvas: FunctionComponent = () => {
    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(location.pathname === "/");

    useEffect(() => {
        setTimeout(() => setIsHomePage(location.pathname === "/"), 1300);
    }, [location.pathname]);

    return (
        <StyledCanvasWrapper>
            <ReactThreeCanvas orthographic>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} />
                    <pointLight position={[-10, -10, -10]} />
                    {isHomePage && <TorusKnotGeometry />}
                </Suspense>
            </ReactThreeCanvas>
        </StyledCanvasWrapper>
    );
};

export default BackCanvas;
