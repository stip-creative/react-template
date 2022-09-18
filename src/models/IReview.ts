import { IImage } from "./IImage";
import { IText } from "./IText";

export interface IReview {
    review: IText;
    owner_photo: IImage;
    owner: string;
    year: number;
}
