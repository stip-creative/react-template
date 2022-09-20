export interface ICourseMeta {
    node: {
        meta: {
            uid: string;
        };
        course_type: string | null;
        subject: string | null;
        class: string | null;
    };
}
