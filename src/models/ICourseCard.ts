import { IText } from "./IText";

export interface ICourseCard {
    course: {
        card_title: IText[];
        card_description: string;
        _meta: {
            uid: string;
        };
    };
}
