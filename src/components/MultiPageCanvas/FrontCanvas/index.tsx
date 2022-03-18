import { Canvas as ReactThreeCanvas } from "@react-three/fiber";
import React, { FunctionComponent, Suspense, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import PageTransitionStatus from "../../../models/PageTransitionStatus";
import { RootState } from "../../../store";
import PageTransitionTitle from "../../PageTransitionTitle";

import PageTransitionPlane from "./PageTransitionPlane";
import StyledCanvasWrapper from "./style";

export interface ICanvas {
    transitionStatus: PageTransitionStatus;
}

const FrontCanvas: FunctionComponent = () => {
    const timeLine = useSelector((state: RootState) => state.pageTransition.timeLine);
    const location = useLocation();
    const [transitionStatus, setTransitionStatus] = useState<PageTransitionStatus>(PageTransitionStatus.waiting);

    const handleEnter = () => {
        setTransitionStatus(PageTransitionStatus.goIn);
    };

    const handleExited = useCallback(() => {
        setTransitionStatus(PageTransitionStatus.goOut);
        setTimeout(() => setTransitionStatus(PageTransitionStatus.waiting), 700);
    }, []);

    useEffect(() => {
        timeLine.restart();
    }, [location.pathname, timeLine]);

    useEffect(() => {
        timeLine.add(handleEnter, 1);
        timeLine.add(handleExited, 4);
    }, [handleExited, timeLine]);

    return (
        <StyledCanvasWrapper>
            <ReactThreeCanvas orthographic>
                <Suspense fallback={null}>
                    <PageTransitionPlane transitionStatus={transitionStatus} />
                </Suspense>
            </ReactThreeCanvas>
            <PageTransitionTitle location={location} />
        </StyledCanvasWrapper>
    );
};

export default FrontCanvas;
