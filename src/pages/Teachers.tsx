import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

import teachersQuery from "../queries/teachers.graphql";
import SEO from "../components/Seo";
import Page from "../components/Page";
import { updateLoading } from "../slices/homeSlice";
import Footer from "../components/Footer";
import TeachersList from "../components/TeachersList";
import teacherCarouselTransform from "../utils/teacherCarouselTransform";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Sidebar from "../components/Sidebar";
import { ICourseMeta } from "../models/ICourseMeta";
import { ISelecters } from "../models/ISelecters";
import sidebarFiltersTransform from "../utils/sidebarFiltersTransform";

const Teachers: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { data, loading } = useQuery(teachersQuery);

    useEffect(() => {
        dispatch(updateLoading(loading));
    }, [dispatch, loading]);

    if (loading) return null;

    const teachersData = data?.page?.edges[0]?.node;
    const footerData = data?.allFooters?.edges[0]?.node;
    const globalSeo = data?.global?.edges[0]?.node;
    const contactFormData = data?.allContact_forms?.edges[0]?.node;
    const coursesFormData = data?.allCourses?.edges;

    const coursesMeta: ICourseMeta[] = coursesFormData.map(item => item.node);
    const selecters: ISelecters = sidebarFiltersTransform(coursesFormData);

    return (
        <>
            <Header />
            <Sidebar coursesMeta={coursesMeta} classes={selecters.classes} subjects={selecters.subjects} course_types={selecters.course_types} />

            <Page>
                <SEO seo={teachersData?.seo} defaultSeo={globalSeo} />
                <TeachersList title={teachersData.title[0]} description={teachersData.description[0]} teachers={teacherCarouselTransform(teachersData?.teachers)} />
                <ContactForm title={contactFormData.title[0]} image={contactFormData.image} privacyPolicyLink={footerData.privacy_policy_doc.url} />
                <Footer
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
