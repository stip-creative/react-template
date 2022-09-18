import { ICard } from "../models/ICard";
import { IText } from "../models/IText";

interface IData {
    course: {
        card_description: string;
        card_title: IText[];
        _meta: {
            uid: string;
        };
    };
}

const courseCarouselTransform = (data: IData[]): ICard[] => {
    return data.map(element => ({
        // eslint-disable-next-line no-underscore-dangle
        uid: element.course._meta.uid,
        widthLink: true,
        title: element.course.card_title[0],
        subTitle: element.course.card_description,
    }));
};

export default courseCarouselTransform;
