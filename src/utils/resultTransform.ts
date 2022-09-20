import { ICard } from "../models/ICard";
import { IImage } from "../models/IImage";
import { IText } from "../models/IText";

interface IData {
    result: {
        name: IText[];
        score: number;
        subject: string;
        year: number;
        image: IImage;
        meta: {
            uid: string;
        };
    };
}

const resultTransform = (data: IData[]): ICard[] => {
    return data.map(element => ({
        // eslint-disable-next-line no-underscore-dangle
        uid: element.result.meta.uid,
        widthLink: false,
        title: element.result.name[0],
        subTitle: element.result.subject,
        description: `${element.result.score} баллов · ${element.result.year} год`,
        image: element.result.image,
    }));
};

export default resultTransform;
