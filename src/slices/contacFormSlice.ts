import { createSlice } from "@reduxjs/toolkit";

import { IImage } from "../models/IImage";
import { IText } from "../models/IText";

interface IContacFormState {
    title: IText[];
    image: IImage;
}

const initialState: IContacFormState = {
    title: [],
    image: {
        dimensions: {
            width: 0,
            height: 0,
        },
        alt: null,
        copyright: null,
        url: "",
    },
};

export const contacFormSlice = createSlice({
    name: "contacForm",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {},
});

export default contacFormSlice.reducer;
