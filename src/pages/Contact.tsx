import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";

import Page from "../components/Page";
import sidebarFiltersTransform from "../utils/sidebarFiltersTransform";
import { ISelecters } from "../models/ISelecters";
import { RootState } from "../store";

const AsyncHeader = loadable(() => import("../components/Header"));
const AsyncSidebar = loadable(() => import("../components/Sidebar"));
const AsyncFooter = loadable(() => import("../components/Footer"));
const AsyncContact = loadable(() => import("../components/Contact"));
const AsyncContactForm = loadable(() => import("../components/ContactForm"));

const ContactPage: FunctionComponent = () => {
    const contactsData = useSelector((state: RootState) => state.contacts);
    const footerData = useSelector((state: RootState) => state.footer);
    const contactFormData = useSelector((state: RootState) => state.contacForm);
    const coursesFormData = useSelector((state: RootState) => state.course.items);

    const selecters: ISelecters = sidebarFiltersTransform(coursesFormData);

    return (
        <>
            <AsyncHeader />
            <AsyncSidebar coursesMeta={coursesFormData} classes={selecters.classes} subjects={selecters.subjects} course_types={selecters.course_types} />
            <Page>
                <AsyncContact
                    title={contactsData.title[0].text}
                    mapItems={contactsData.map.offices}
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

export default ContactPage;
