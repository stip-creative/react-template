import { IText } from "./IText";

export interface IDropdown {
    title: IText[];
    elements: {
        title: string;
        text: IText;
    }[];
}
