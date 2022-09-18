import { IImage } from "./IImage";
import { IText } from "./IText";

export interface ICard {
    uid?: string;
    widthLink?: boolean;
    title: IText;
    subTitle: string;
    description?: string;
    image?: IImage;
}
