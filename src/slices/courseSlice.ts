import { createSlice } from "@reduxjs/toolkit";

interface ICourseState {
    _meta: {
        uid: string;
    };
    course_type: string;
    subject: string;
    class: string;
}

const initialState: ICourseState = {
    _meta: {
        uid: "",
    },
    course_type: "",
    subject: "",
    class: "",
};

export const courseSlice = createSlice({
    name: "course",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {},
});

export default courseSlice.reducer;
