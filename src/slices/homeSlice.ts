import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import ISeo from "../models/ISeo";
import favicon from "../../public/favicon-16x16.png";
import { AppDispatch } from "../store";

interface IHomeState {
    seo: ISeo;
}

const initialState: IHomeState = {
    seo: {
        metaTitle: "HOME",
        metaDescription: "HOME",
        shareImage: {
            url: favicon,
        },
        favicon: {
            url: favicon,
        },
    },
};

export const homeSlice = createSlice({
    name: "home",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {
        // Используйте тип 'PayloadAction' для объявления содержимого 'action.payload'.
        setTitle: (state, action: PayloadAction<string>) => {
            state.seo.metaTitle = action.payload;
        },
    },
});

export const { setTitle } = homeSlice.actions;

export default homeSlice.reducer;

export const updateTitle = (newTitle: string) => (dispatch: AppDispatch) => {
    dispatch(setTitle(newTitle));
};
