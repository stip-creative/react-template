import { createSlice } from "@reduxjs/toolkit";
import gsap from "gsap";

interface IPageTransitionState {
    timer: number;
    timeLine: gsap.core.Timeline;
}

const initialState: IPageTransitionState = {
    timer: 1500,
    timeLine: gsap.timeline(),
};

export const pageTransitionSlice = createSlice({
    name: "pageTransition",
    initialState,
    reducers: {},
});

// export const {} = pageTransitionSlice.actions;

export default pageTransitionSlice.reducer;

// export const updateTitle = (newTitle: string) => (dispatch: AppDispatch) => {
//     dispatch(setTitle(newTitle));
// };
