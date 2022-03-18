import { configureStore, combineReducers, Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";

import homeReducer from "./slices/homeSlice";
import pageTransitionReducer from "./slices/pageTrasitionSlice";

const rootReducer = combineReducers({
    home: homeReducer,
    pageTransition: pageTransitionReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;
