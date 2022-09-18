import { ITextSpan } from "./ITextSpan";
import TextType from "./TextType";

export interface IText {
    type: TextType;
    text: string;
    spans: ITextSpan;
}
