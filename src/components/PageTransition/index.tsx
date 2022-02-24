import React, { FunctionComponent, PropsWithChildren, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";

import PageTransitionStatus from "../../models/PageTransitionStatus";
import { RootState } from "../../store";

import Canvas from "./Canvas";
import TransitionTitle from "./TransitionTitle";

const PageTransition: FunctionComponent<PropsWithChildren<Record<never, never>>> = ({ children }) => {
    const location = useLocation();
    const aboutMetaTitle = useSelector((state: RootState) => state.about.seo.metaTitle);
    const homeMetaTitle = useSelector((state: RootState) => state.home.seo.metaTitle);

    const [transitionStatus, setTransitionStatus] = useState<PageTransitionStatus>(PageTransitionStatus.waiting);
    const [title, setTitle] = useState<string>(homeMetaTitle);

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setTitle(homeMetaTitle);
                break;
            case "/about":
                setTitle(aboutMetaTitle);
                break;
            default:
                setTitle(homeMetaTitle);
        }
    }, [aboutMetaTitle, homeMetaTitle, location.pathname]);

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
            <Canvas transitionStatus={transitionStatus} />
            <TransitionTitle callBack={handleExited} text={title} transitionStatus={transitionStatus} />
        </TransitionGroup>
    );
};

export default PageTransition;
