import { ISelecters } from "../models/ISelecters";

interface IData {
    node: {
        class: string;
        course_type: string;
        subject: string;
    };
}

const isUniqueValue = (array: string[], item: string) => {
    return array.indexOf(item) === -1 && item !== null;
};

const sidebarFiltersTransform = (data: IData[]): ISelecters => {
    let result: ISelecters = {
        classes: [],
        course_types: [],
        subjects: [],
    };
    const classes: string[] = [];
    const course_types: string[] = [];
    const subjects: string[] = [];

    data.forEach(item => {
        // debugger;
        if (isUniqueValue(classes, item.node.class)) {
            classes.push(item.node.class);
        }

        if (isUniqueValue(course_types, item.node.course_type)) {
            course_types.push(item.node.course_type);
        }

        if (isUniqueValue(subjects, item.node.subject)) {
            subjects.push(item.node.subject);
        }
        result = {
            classes: classes.map((el, index) => ({
                label: el,
                value: index,
            })),
            course_types: course_types.map(el => ({
                label: el,
                value: el,
            })),
            subjects: subjects.map(el => ({
                label: el,
                value: el,
            })),
        };
    });

    return result;
};

export default sidebarFiltersTransform;
