import { IText } from "./IText";

export interface IMapItem {
    address: IText[];
    coordinates: {
        latitude: number;
        longitude: number;
    };
}

export interface IMapItemWithSchedule extends IMapItem {
    office_schedule: {
        week: {
            day_of_week: string;
            time: IText[];
        }[];
    };
}
