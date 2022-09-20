import loadable from "@loadable/component";
import React, { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";

import PageTransitionWrapper from "../components/PageTransitionWrapper";
import { RootState } from "../store";
import colors, { allScrollClasser } from "../styles/variables";

const AsyncHome = loadable(() => import("../pages/Home"));

export const StyledFade = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${colors.white};
    z-index: 101;
    pointer-events: none;
    opacity: 1;
    transition: opacity 1s cubic-bezier(0.25, 0.25, 0, 1);
    will-change: opacity;

    &.show {
        transition: opacity 0.4s cubic-bezier(0.25, 0.25, 0, 1);

        opacity: 1;
    }

    &.hide {
        opacity: 0;
    }
`;

const AppRoutes: FunctionComponent = () => {
    const location = useLocation();
    const timeLine = useSelector((state: RootState) => state.animations.welcomeTimeLine);

    const handlerInitScrollPosition = () => {
        window.scrollTo(0, 0);
    };

    const handlerAfterAnimation = () => {
        document.getElementsByTagName("header")[0]?.classList.remove(...allScrollClasser);
    };

    const showFade = () => {
        const fade = document.getElementById("fade");

        if (fade) {
            fade.classList.remove("hide");
            fade.classList.add("show");
        }
    };

    const hideFade = () => {
        const fade = document.getElementById("fade");

        if (fade) {
            fade.classList.remove("show");
            fade.classList.add("hide");
        }
    };

    useEffect(() => {
        timeLine.add(showFade, 0);
        timeLine.add(handlerInitScrollPosition, 0.4);
        timeLine.add(handlerAfterAnimation, 0.4);
        timeLine.add(hideFade, 1.8);
    }, [timeLine]);

    useEffect(() => {
        timeLine.restart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.pathname]);

    return (
        <>
            <PageTransitionWrapper>
                <Routes location={location}>
                    <Route path="/" element={<AsyncHome />} />
                </Routes>
            </PageTransitionWrapper>
            <StyledFade id="fade" />
        </>
    );
};

export default AppRoutes;
