import { createSlice } from "@reduxjs/toolkit";

import ISeo from "../models/ISeo";
import { ITeacherCard } from "../models/ITeacherCard";
import { IText } from "../models/IText";

interface ITeachersState {
    seo: ISeo;
    title: IText[];
    description: IText[];
    teachers: ITeacherCard[];
}

const initialState: ITeachersState = {
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
    teachers: [],
};

export const teachersSlice = createSlice({
    name: "teachers",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {},
});

export default teachersSlice.reducer;
