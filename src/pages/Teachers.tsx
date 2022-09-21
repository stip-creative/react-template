import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";

import Page from "../components/Page";
import teacherCarouselTransform from "../utils/teacherCarouselTransform";
import { ISelecters } from "../models/ISelecters";
import sidebarFiltersTransform from "../utils/sidebarFiltersTransform";
import { RootState } from "../store";

const AsyncHeader = loadable(() => import("../components/Header"));
const AsyncSidebar = loadable(() => import("../components/Sidebar"));
const AsyncFooter = loadable(() => import("../components/Footer"));
const AsyncTeachersList = loadable(() => import("../components/TeachersList"));
const AsyncContactForm = loadable(() => import("../components/ContactForm"));

const Teachers: FunctionComponent = () => {
    const teachersData = useSelector((state: RootState) => state.teachers);
    const footerData = useSelector((state: RootState) => state.footer);
    const contactFormData = useSelector((state: RootState) => state.contacForm);
    const coursesFormData = useSelector((state: RootState) => state.course.items);

    const selecters: ISelecters = sidebarFiltersTransform(coursesFormData);

    return (
        <>
            <AsyncHeader />
            <AsyncSidebar coursesMeta={coursesFormData} classes={selecters.classes} subjects={selecters.subjects} course_types={selecters.course_types} />
            <Page>
                <AsyncTeachersList title={teachersData.title[0]} description={teachersData.description[0]} teachers={teacherCarouselTransform(teachersData?.teachers)} />
                <AsyncContactForm title={contactFormData.title[0]} image={contactFormData.image} privacyPolicyLink={footerData.privacy_policy_doc.url} />
                <AsyncFooter
                    phones={footerData.phones}
                    email={footerData.email}
                    address={footerData.address}
                    social_media={footerData.social_media}
                    privacyPolicyLink={footerData.privacy_policy_doc.url}
                    publickOfferLink={footerData.public_offer_doc.url}
                />
            </Page>
        </>
    );
};

export default Teachers;
