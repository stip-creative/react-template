import React from "react";
import { Routes, Route, useLocation } from "react-router";
import loadable from "@loadable/component";

const AsyncHome = loadable(() => import("./Home"));

const App = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/" element={<AsyncHome />} />
        </Routes>
    );
};

export default App;
