import { createSlice } from "@reduxjs/toolkit";

import { ICourseMeta } from "../models/ICourseMeta";

interface ICourseState {
    items: ICourseMeta[];
}

const initialState: ICourseState = {
    items: [],
};

export const courseSlice = createSlice({
    name: "course",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {},
});

export default courseSlice.reducer;
