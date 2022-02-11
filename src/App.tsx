import React, { FunctionComponent } from "react";

import Nav from "./components/Nav";
import Routes from "./routes/Routes";
import GlobalStyles from "./styles/globalStyles";

import "./styles/reset.scss";

const App: FunctionComponent = () => {
    return (
        <>
            <GlobalStyles />
            <Nav />
            <Routes />
        </>
    );
};

export default App;
