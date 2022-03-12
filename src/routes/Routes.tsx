import React, { FunctionComponent } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import MultiPageCanvas from "../components/MultiPageCanvas";
import PageTransitionWrapper from "../components/PageTransitionWrapper";
import About from "../pages/About";
import Home from "../pages/Home";

const AppRoutes: FunctionComponent = () => {
    const location = useLocation();

    return (
        <>
            <PageTransitionWrapper>
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </PageTransitionWrapper>
            <MultiPageCanvas />
        </>
    );
};

export default AppRoutes;
