import React, { FunctionComponent } from "react";

import Nav from "./components/Nav";
import PageTransition from "./components/PageTransition";
import Routes from "./routes/Routes";

import "./styles/reset.scss";

const App: FunctionComponent = () => {
    return (
        <>
            <Nav />
            <PageTransition>
                <Routes />
            </PageTransition>
        </>
    );
};

export default App;
