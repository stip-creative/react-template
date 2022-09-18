import { IText } from "./IText";

interface ISeo {
    metatitle: string;
    metadescription: IText[];
    shareimage: {
        url: string;
    };
    favicon: {
        url: string;
    };
}

export default ISeo;
