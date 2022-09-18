import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

import contactsQuery from "../queries/contacts.graphql";
import SEO from "../components/Seo";
import Page from "../components/Page";
import { updateLoading } from "../slices/homeSlice";
import Footer from "../components/Footer";
import Header from "../components/Header";
import sidebarFiltersTransform from "../utils/sidebarFiltersTransform";
import { ISelecters } from "../models/ISelecters";
import { ICourseMeta } from "../models/ICourseMeta";
import Sidebar from "../components/Sidebar";
import Contact from "../components/Contact";
import ContactForm from "../components/ContactForm";

const ContactPage: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { data, loading } = useQuery(contactsQuery);

    useEffect(() => {
        dispatch(updateLoading(loading));
    }, [dispatch, loading]);

    if (loading) return null;

    const contactsData = data?.page?.edges[0]?.node;
    const footerData = data?.allFooters?.edges[0]?.node;
    const coursesFormData = data?.allCourses?.edges;
    const mapItems = data?.page?.edges[0].node.map.offices;
    const globalSeo = data?.global?.edges[0]?.node;
    const contactFormData = data?.allContact_forms?.edges[0]?.node;

    const selecters: ISelecters = sidebarFiltersTransform(coursesFormData);
    const coursesMeta: ICourseMeta[] = coursesFormData.map(item => item.node);

    return (
        <>
            <Header />
            <Sidebar coursesMeta={coursesMeta} classes={selecters.classes} subjects={selecters.subjects} course_types={selecters.course_types} />

            <Page>
                <SEO seo={contactsData?.seo} defaultSeo={globalSeo} />
                <Contact
                    title={contactsData.title[0].text}
                    mapItems={mapItems}
                    social_media={footerData.social_media}
                    phoneTitle={contactsData.phone_title}
                    phoneNubers={contactsData.phone_nubers}
                    workingHours={contactsData.working_hours}
                    workingHoursText={contactsData.working_hours_text[0].text}
                    officeAddressTitle={contactsData.office_address_title}
                    officeAddress={contactsData.office_address[0].text}
                    emailTitle={contactsData.email_title}
                    email={contactsData.email}
                />
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

export default ContactPage;
