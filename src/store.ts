import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import homeReducer from "./slices/homeSlice";
import animationsReducer from "./slices/animationsSlice";
import footerReducer from "./slices/footerSlice";
import contacFormReducer from "./slices/contacFormSlice";
import globalReducer from "./slices/globalSlice";
import courseReducer from "./slices/courseSlice";

const rootReducer = combineReducers({
    home: homeReducer,
    animations: animationsReducer,
    footer: footerReducer,
    contacForm: contacFormReducer,
    global: globalReducer,
    course: courseReducer,
});

export const configureStoreWithState = (preloadedState = {}) => {
    return configureStore({
        reducer: rootReducer,
        middleware: getDefaultMiddleware =>
            getDefaultMiddleware({
                serializableCheck: false,
            }),
        preloadedState,
    });
};

export const store = configureStoreWithState();

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
