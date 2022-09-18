import { IImage } from "../models/IImage";
import { IText } from "../models/IText";

interface IData {
    title: IText[];
    text: IText[];
    image: IImage;
}

interface IResponse {
    title: IText;
    text: IText;
    image: IImage;
}

const companyFactsTransform = (data: IData[]): IResponse[] => {
    return data.map(item => ({
        title: item.title[0],
        text: item.text[0],
        image: item.image,
    }));
};

export default companyFactsTransform;
