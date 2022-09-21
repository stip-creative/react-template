import { createSlice } from "@reduxjs/toolkit";

import { IMap } from "../models/IMap";
import { IPhone } from "../models/IPhone";
import ISeo from "../models/ISeo";
import { IText } from "../models/IText";

interface IContactsState {
    seo: ISeo;
    title: IText[];
    phone_title: string;
    phone_nubers: IPhone[];
    working_hours: string;
    working_hours_text: IText[];
    office_address_title: string;
    office_address: IText[];
    email_title: string;
    email: string;
    map: IMap;
}

const initialState: IContactsState = {
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
    phone_title: "",
    phone_nubers: [],
    working_hours: "",
    working_hours_text: [],
    office_address_title: "",
    office_address: [],
    email_title: "",
    email: "",
    map: {
        offices: [],
    },
};

export const contactsSlice = createSlice({
    name: "contacts",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {},
});

export default contactsSlice.reducer;
