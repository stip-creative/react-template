import React, { FunctionComponent, PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";

const PageTransition: FunctionComponent<PropsWithChildren<Record<never, never>>> = ({ children }) => {
    const location = useLocation();

    return (
        <TransitionGroup component={null}>
            <Transition key={location.pathname} timeout={1000}>
                {children}
            </Transition>
        </TransitionGroup>
    );
};

export default PageTransition;
