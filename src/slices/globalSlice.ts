import { createSlice } from "@reduxjs/toolkit";

import { IImage } from "../models/IImage";
import { IText } from "../models/IText";

interface IGlobalState {
    favicon: IImage;
    metatitle: string;
    metadescription: IText[];
    shareimage: IImage;
}

const initialState: IGlobalState = {
    favicon: {
        dimensions: {
            width: 0,
            height: 0,
        },
        alt: null,
        copyright: null,
        url: "",
    },
    metatitle: "",
    metadescription: [],
    shareimage: {
        dimensions: {
            width: 0,
            height: 0,
        },
        alt: null,
        copyright: null,
        url: "",
    },
};

export const globalSlice = createSlice({
    name: "global",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {},
});

export default globalSlice.reducer;
