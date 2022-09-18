import { createSlice } from "@reduxjs/toolkit";

import { IDoc } from "../models/IDoc";
import { IPhone } from "../models/IPhone";
import SocialNetworksType from "../models/SocialNetworksType";

interface IFooterState {
    phones: IPhone[];
    email: string;
    address: string;
    social_media: {
        type: SocialNetworksType;
        link: string;
    }[];
    privacy_policy_doc: IDoc;
    public_offer_doc: IDoc;
}

const initialState: IFooterState = {
    phones: [],
    email: "",
    address: "",
    social_media: [
        {
            type: SocialNetworksType.inst,
            link: "",
        },
    ],
    privacy_policy_doc: {
        url: "",
    },
    public_offer_doc: {
        url: "",
    },
};

export const footerSlice = createSlice({
    name: "footer",
    // 'createSlice' выведет тип состояния из 'InitialState'.
    initialState,
    reducers: {},
});

export default footerSlice.reducer;
