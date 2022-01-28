import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppDispatch } from "../store";

interface IHomeState {
    title: string;
}

const initialState: IHomeState = {
    title: "Woohooo!",
};

export const homeSlice = createSlice({
    name: "home",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {
        // Используйте тип 'PayloadAction' для объявления содержимого 'action.payload'.
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
    },
});

export const { setTitle } = homeSlice.actions;

export default homeSlice.reducer;

export const updateTitle = (newTitle: string) => (dispatch: AppDispatch) => {
    dispatch(setTitle(newTitle));
};
