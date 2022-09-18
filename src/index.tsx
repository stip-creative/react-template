import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { loadableReady } from "@loadable/component";
import { Provider } from "react-redux";

import App from "./app/App";
import { configureStoreWithState } from "./store";

const state = window.PRELOADED_STATE;

console.log(state);
const store = configureStoreWithState(state);

loadableReady(() => {
    hydrate(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        document.querySelector("#app")
    );
});
