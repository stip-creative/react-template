import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { StyleSheetManager } from "styled-components";

import App from "../src/App";

const StaticApp = (url: string, sheet: any, store: any) => {
    return (
        <StaticRouter location={url}>
            <Provider store={store}>
                <StyleSheetManager sheet={sheet.instance}>
                    <App />
                </StyleSheetManager>
            </Provider>
        </StaticRouter>
    );
};

export default StaticApp;
