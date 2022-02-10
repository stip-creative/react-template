import React, { FunctionComponent } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";

const App: FunctionComponent = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
};

export default App;
