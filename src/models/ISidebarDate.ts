export interface ISidebarDateItem {
    value: string | null;
    isSelected: boolean;
}

export interface ISidebarDate {
    class: ISidebarDateItem;
    course_type: ISidebarDateItem;
    subject: ISidebarDateItem;
}
