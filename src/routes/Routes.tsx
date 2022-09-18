import React, { FunctionComponent, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

import { StyledFade } from "../components/Header/style";
import PageTransitionWrapper from "../components/PageTransitionWrapper";
import { RootState } from "../store";
import { allScrollClasser } from "../styles/variables";

const Home = React.lazy(() => import("../pages/Home"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Course = React.lazy(() => import("../pages/Course"));
const Results = React.lazy(() => import("../pages/Results"));
const Teachers = React.lazy(() => import("../pages/Teachers"));

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
        <Suspense fallback={null}>
            <PageTransitionWrapper>
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/teachers" element={<Teachers />} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/course/:uid" element={<Course />} />
                </Routes>
            </PageTransitionWrapper>
            <StyledFade id="fade" />
        </Suspense>
    );
};

export default AppRoutes;
