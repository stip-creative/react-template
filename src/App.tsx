import React, { FunctionComponent } from "react";
import { Route } from "wouter";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import "./styles/reset.scss";
import About from "./pages/About";

const App: FunctionComponent = () => {
    return (
        <div>
            <Nav />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
        </div>
    );
};

export default App;
