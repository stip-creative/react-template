import { createSlice } from "@reduxjs/toolkit";

import { IResultCard } from "../models/IResultCard";
import ISeo from "../models/ISeo";
import { IText } from "../models/IText";

interface IResultsState {
    seo: ISeo;
    title: IText[];
    description: IText[];
    results: IResultCard[];
}

const initialState: IResultsState = {
    seo: {
        metatitle: "",
        metadescription: [],
        shareimage: {
            url: "",
        },
        favicon: {
            url: "",
        },
    },
    title: [],
    description: [],
    results: [],
};

export const resultsSlice = createSlice({
    name: "results",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {},
});

export default resultsSlice.reducer;
