import React from "react";
import { Routes, Route } from "react-router";
import loadable from "@loadable/component";

const AsyncHome = loadable(() => import("./Home"));

const App = () => {
    return <AsyncHome />;
};

export default App;
