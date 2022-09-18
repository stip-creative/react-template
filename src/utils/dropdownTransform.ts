import { IDropdown } from "../models/IDropdown";
import { IText } from "../models/IText";

interface IData {
    dropdown_title: IText[];
    dropdown_element: {
        title: string;
        text: IText[];
    }[];
}

const dropdownTransform = (data: IData): IDropdown => {
    return {
        title: data.dropdown_title[0],
        elements: data.dropdown_element.map(element => ({
            title: element.title,
            text: element.text[0],
        })),
    };
};

export default dropdownTransform;
