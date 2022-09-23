import loadable from "@loadable/component";
import React, { FunctionComponent, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

import PageTransitionWrapper from "../components/PageTransitionWrapper";
import { RootState } from "../store";
import { allScrollClasser } from "../styles/variables";

const AsyncHome = loadable(() => import("../pages/Home"));
const AsyncTeachers = loadable(() => import("../pages/Teachers"));
const AsyncResults = loadable(() => import("../pages/Results"));
const AsyncContact = loadable(() => import("../pages/Contact"));

const AppRoutes: FunctionComponent = () => {
    const location = useLocation();
    const timeLine = useSelector((state: RootState) => state.animations.welcomeTimeLine);

    const handlerAfterAnimation = () => {
        document.getElementsByTagName("header")[0]?.classList.remove(...allScrollClasser);
    };

    const showFade = () => {
        const fade = document.getElementById("fade");

        if (fade) {
            fade.classList.remove("hide");
        }
    };

    const hideFade = () => {
        const fade = document.getElementById("fade");

        if (fade) {
            fade.classList.add("hide");
        }
    };

    useEffect(() => {
        timeLine.add(showFade, 0);
        // timeLine.add(handlerInitScrollPosition, 0.4);
        // timeLine.add(handlerAfterAnimation, 0.4);
        timeLine.add(hideFade, 0.6);
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
                    <Route path="/teachers" element={<AsyncTeachers />} />
                    <Route path="/results" element={<AsyncResults />} />
                    <Route path="/contact" element={<AsyncContact />} />
                </Routes>
            </PageTransitionWrapper>
            <div id="fade" />
        </>
    );
};

export default AppRoutes;
