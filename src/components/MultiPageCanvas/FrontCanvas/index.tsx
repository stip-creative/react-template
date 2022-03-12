import { Canvas as ReactThreeCanvas } from "@react-three/fiber";
import React, { FunctionComponent, Suspense, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";

import PageTransitionStatus from "../../../models/PageTransitionStatus";
import PageTransitionTitle from "../../PageTransitionTitle";

import PageTransitionPlane from "./PageTransitionPlane";
import StyledCanvasWrapper from "./style";

export interface ICanvas {
    transitionStatus: PageTransitionStatus;
}

const FrontCanvas: FunctionComponent = () => {
    const location = useLocation();
    const [transitionStatus, setTransitionStatus] = useState<PageTransitionStatus>(PageTransitionStatus.waiting);
    const isHomePage = useRef(false);

    const handleEnter = () => {
        setTransitionStatus(PageTransitionStatus.goIn);
    };

    const handleExited = () => {
        isHomePage.current = location.pathname === "/";
        setTransitionStatus(PageTransitionStatus.goOut);
        setTimeout(() => setTransitionStatus(PageTransitionStatus.waiting), 700);
    };

    useEffect(() => {
        handleEnter();
    }, [location.pathname]);

    return (
        <StyledCanvasWrapper>
            <ReactThreeCanvas orthographic>
                <Suspense fallback={null}>
                    <PageTransitionPlane transitionStatus={transitionStatus} />
                </Suspense>
            </ReactThreeCanvas>
            <PageTransitionTitle callBack={handleExited} location={location} transitionStatus={transitionStatus} />
        </StyledCanvasWrapper>
    );
};

export default FrontCanvas;
