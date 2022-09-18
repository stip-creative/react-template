import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICourse } from "../models/ICourse";
import { ICourseCard } from "../models/ICourseCard";
import { IDropdown } from "../models/IDropdown";
import { IFact } from "../models/IFact";
import { IImage } from "../models/IImage";
import { IMap } from "../models/IMap";
import { IReviewCard } from "../models/IReviewCard";
import ISeo from "../models/ISeo";
import { ITeacherCard } from "../models/ITeacherCard";
import { IText } from "../models/IText";
import { AppDispatch } from "../store";

interface IHomeState {
    seo: ISeo;
    first_title: IText[];
    first_sub_title: IText[];
    isOpenSidebar: boolean;
    main_image: IImage;
    about_company_title: IText[];
    company_facts: IFact[];
    about_courses_title: IText[];
    about_courses_description: IText[];
    courses_group: ICourse[];
    course_carousel_title: IText[];
    course_carousel_description: IText[];
    courses_carousel: ICourseCard[];
    teacher_carousel_title: IText[];
    teacher_carousel_description: IText[];
    teacher_carousel: ITeacherCard[];
    review_title: IText[];
    review_carousel: IReviewCard[];
    dropdown: IDropdown;
    map_title: IText[];
    map: IMap;
}

const initialState: IHomeState = {
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
    first_title: [],
    first_sub_title: [],
    isOpenSidebar: false,
    main_image: {
        dimensions: {
            width: 0,
            height: 0,
        },
        alt: null,
        copyright: null,
        url: "",
    },
    about_company_title: [],
    company_facts: [],
    about_courses_title: [],
    about_courses_description: [],
    courses_group: [],
    course_carousel_title: [],
    course_carousel_description: [],
    courses_carousel: [],
    teacher_carousel_title: [],
    teacher_carousel_description: [],
    teacher_carousel: [],
    review_title: [],
    review_carousel: [],
    dropdown: {
        title: [],
        elements: [],
    },
    map_title: [],
    map: {
        offices: [],
    },
};

export const homeSlice = createSlice({
    name: "home",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {
        // Используйте тип 'PayloadAction' для объявления содержимого 'action.payload'.
        setTitle: (state, action: PayloadAction<string>) => {
            state.seo.metatitle = action.payload;
        },
        setIsOpenSidebar: (state, action: PayloadAction<boolean>) => {
            state.isOpenSidebar = action.payload;
        },
    },
});

export const { setTitle, setIsOpenSidebar } = homeSlice.actions;

export default homeSlice.reducer;

export const updateTitle = (newTitle: string) => (dispatch: AppDispatch) => {
    dispatch(setTitle(newTitle));
};

export const updateIsOpenSidebar = (isOpenSidebar: boolean) => (dispatch: AppDispatch) => {
    dispatch(setIsOpenSidebar(isOpenSidebar));
};
