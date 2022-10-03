import loadable from "@loadable/component";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { useSelector } from "react-redux";

import useParallax from "../../hooks/useParallax";
import { ISelecters } from "../../models/ISelecters";
import { RootState } from "../../store";
import sidebarFiltersTransform from "../../utils/sidebarFiltersTransform";

import StyledPageWrapper from "./style";

const AsyncSidebar = loadable(() => import("../Sidebar"));

const Page: FunctionComponent<PropsWithChildren<Record<never, never>>> = ({ children }) => {
    const coursesFormData = useSelector((state: RootState) => state.course.items);

    const selecters: ISelecters = sidebarFiltersTransform(coursesFormData);

    useParallax();

    return (
        <StyledPageWrapper>
            <AsyncSidebar coursesMeta={coursesFormData} classes={selecters.classes} subjects={selecters.subjects} course_types={selecters.course_types} />
            {children}
        </StyledPageWrapper>
    );
};

export default Page;
