import { ICard } from "../models/ICard";
import { IImage } from "../models/IImage";
import { IText } from "../models/IText";

interface IData {
    teacher: {
        teacher_description: string;
        teacher_title: IText[];
        teacher_photo: IImage;
        subject: string;
        _meta: {
            uid: string;
        };
    };
}

const teacherCarouselTransform = (data: IData[]): ICard[] => {
    return data.map(element => ({
        // eslint-disable-next-line no-underscore-dangle
        uid: element.teacher._meta.uid,
        widthLink: false,
        title: element.teacher.teacher_title[0],
        subTitle: element.teacher.subject,
        description: element.teacher.teacher_description || "",
        image: element.teacher.teacher_photo,
    }));
};

export default teacherCarouselTransform;
