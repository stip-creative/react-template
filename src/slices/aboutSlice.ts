import { createSlice } from "@reduxjs/toolkit";

import ISeo from "../models/ISeo";
import favicon from "../../public/favicon-16x16.png";

interface IAboutState {
    seo: ISeo;
}

const initialState: IAboutState = {
    seo: {
        metaTitle: "ABOUT",
        metaDescription: "ABOUT",
        shareImage: {
            url: favicon,
        },
        favicon: {
            url: favicon,
        },
    },
};

export const aboutSlice = createSlice({
    name: "about",
    initialState,
    reducers: {},
});

export default aboutSlice.reducer;
