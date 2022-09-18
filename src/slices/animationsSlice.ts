import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import gsap from "gsap";

interface IAnimationsState {
    welcomeTimeLine: gsap.core.Timeline;
}

const initialState: IAnimationsState = {
    welcomeTimeLine: gsap.timeline(),
};

export const pageTransitionSlice = createSlice({
    name: "pageTransition",
    initialState,
    reducers: {
        updateTimeLine: (state, action: PayloadAction<gsap.core.Timeline>) => {
            state.welcomeTimeLine = action.payload;
        },
    },
});

// eslint-disable-next-line no-empty-pattern
export const {} = pageTransitionSlice.actions;

export default pageTransitionSlice.reducer;
