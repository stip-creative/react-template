import React, { FunctionComponent, PropsWithChildren, useState } from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";

import PlaneStatus from "../../models/PlaneStatus";

import Canvas from "./Canvas";

const PageTransition: FunctionComponent<PropsWithChildren<Record<never, never>>> = ({ children }) => {
    const location = useLocation();
    const [planeStatus, setPlaneStatus] = useState<PlaneStatus>(PlaneStatus.waiting);

    return (
        <TransitionGroup component={null}>
            <Transition
                key={location.pathname}
                timeout={1000}
                onEnter={() => {
                    // debugger;
                    setPlaneStatus(PlaneStatus.goIn);
                }}
                onExited={() => {
                    setPlaneStatus(PlaneStatus.goOut);
                    setTimeout(() => setPlaneStatus(PlaneStatus.waiting), 700);
                }}
            >
                {children}
            </Transition>
            <Canvas planeStatus={planeStatus} />
        </TransitionGroup>
    );
};

export default PageTransition;
