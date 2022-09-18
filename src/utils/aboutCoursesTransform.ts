import { IImage } from "../models/IImage";
import { IText } from "../models/IText";

interface IData {
    title: IText[];
    description: IText[];
    image: IImage;
}

interface IResponse {
    title: IText;
    description: IText;
    image: IImage;
}

const aboutCoursesTransform = (data: IData[]): IResponse[] => {
    return data.map(item => ({
        title: item.title[0],
        description: item.description[0],
        image: item.image,
    }));
};

export default aboutCoursesTransform;
