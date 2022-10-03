import { createSlice } from "@reduxjs/toolkit";

import { IDropdown } from "../models/IDropdown";
import { IFact } from "../models/IFact";
import { IImage } from "../models/IImage";
import { IMap } from "../models/IMap";
import { IReviewCard } from "../models/IReviewCard";
import ISeo from "../models/ISeo";
import { ITeacherCard } from "../models/ITeacherCard";
import { IText } from "../models/IText";
import { RootState } from "../store";

interface ICoursesPagesState {
    items: {
        node: {
            meta: {
                uid: string;
            };
            seo: ISeo;
            title: IText[];
            sub_title: IText[];
            main_image: IImage;
            about_company_title: IText[];
            company_facts: IFact[];
            teacher_carousel_title: IText[];
            teacher_carousel_description: IText[];
            teacher_carousel: ITeacherCard[];
            review_title: IText[];
            review_carousel: IReviewCard[];
            dropdown: IDropdown;
            map_title: IText[];
            map: IMap;
            cost_of_education_title: IText[];
            cost_of_education_slogan: IText[];
            cost_of_education_price: IText[];
            cost_of_education_price_subtitle: IText[];
            cost_of_education_discount: IText[];
            cost_of_education_discount_subtitle: IText[];
        };
    }[];
}

const initialState: ICoursesPagesState = {
    items: [],
};

export const coursesPagesSlice = createSlice({
    name: "coursesPages",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {},
});

export const getCourseByUID = (uid: string) => (dispatch: AppDispatch, getState: any) => {
    const state: RootState = getState();

    return state.coursesPages.items.find(item => item.node.meta.uid === uid);
};

export default coursesPagesSlice.reducer;
