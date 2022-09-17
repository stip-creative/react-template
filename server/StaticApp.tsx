import React from "react";
import { StaticRouter } from "react-router-dom/server";

import App from "../src/app/App";

const StaticApp = (url: string) => {
    return (
        <StaticRouter location={url}>
            <App />
        </StaticRouter>
    );
};

export default StaticApp;
