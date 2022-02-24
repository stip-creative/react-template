import React, { FunctionComponent, PropsWithChildren, useState } from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";

import PageTransitionStatus from "../../models/PageTransitionStatus";

import Canvas from "./Canvas";
import TransitionTitle from "./TransitionTitle";

const PageTransition: FunctionComponent<PropsWithChildren<Record<never, never>>> = ({ children }) => {
    const location = useLocation();
    const [transitionStatus, setTransitionStatus] = useState<PageTransitionStatus>(PageTransitionStatus.waiting);

    const handleEnter = () => {
        setTransitionStatus(PageTransitionStatus.goIn);
    };

    const handleExited = () => {
        setTransitionStatus(PageTransitionStatus.goOut);
        setTimeout(() => setTransitionStatus(PageTransitionStatus.waiting), 700);
    };

    return (
        <TransitionGroup component={null}>
            <Transition key={location.pathname} timeout={1000} onEnter={handleEnter}>
                {children}
            </Transition>
            <Canvas planeStatus={transitionStatus} />
            <TransitionTitle callBack={handleExited} text="test test" transitionStatus={transitionStatus} />
        </TransitionGroup>
    );
};

export default PageTransition;
