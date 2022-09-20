import { IText } from "./IText";
import { IImage } from "./IImage";

export interface ITeacherCard {
    teacher: {
        teacher_title: IText[];
        teacher_description: string;
        teacher_photo: IImage;
        subject: string;
        meta: {
            uid: string | null;
        };
    };
}
