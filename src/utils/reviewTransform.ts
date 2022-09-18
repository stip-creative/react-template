import { IImage } from "../models/IImage";
import { IReview } from "../models/IReview";
import { IText } from "../models/IText";

interface IData {
    review: {
        owner: string;
        owner_photo: IImage;
        review: IText[];
        year: number;
    };
}

const reviewTransform = (data: IData[]): IReview[] => {
    return data.map(element => ({
        review: element.review.review[0],
        owner_photo: element.review.owner_photo,
        owner: element.review.owner,
        year: element.review.year,
    }));
};

export default reviewTransform;
