import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

import App from "../src/app/App";

const StaticApp = (url: string, store: any) => {
    return (
        <StaticRouter location={url}>
            <Provider store={store}>
                <App />
            </Provider>
        </StaticRouter>
    );
};

export default StaticApp;
