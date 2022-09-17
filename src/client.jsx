import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";

import App from "./app/App";

loadableReady(() => {
    hydrate(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        document.querySelector("#app")
    );
});
