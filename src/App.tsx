import React, { FunctionComponent } from "react";

import Routes from "./routes/Routes";
import GlobalStyles from "./styles/globalStyles";

import "./styles/reset.scss";

const App: FunctionComponent = () => {
    return (
        <>
            <GlobalStyles />
            <Routes />
        </>
    );
};

export default App;
