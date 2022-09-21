import { IText } from "./IText";
import { IImage } from "./IImage";

export interface IResultCard {
    result: {
        name: IText[];
        subject: string;
        score: number;
        year: number;
        image: IImage;
        meta: {
            uid: string | null;
        };
    };
}
