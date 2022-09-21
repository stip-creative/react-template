import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";

import Page from "../components/Page";
import resultTransform from "../utils/resultTransform";
import { ISelecters } from "../models/ISelecters";
import sidebarFiltersTransform from "../utils/sidebarFiltersTransform";
import { RootState } from "../store";

const AsyncHeader = loadable(() => import("../components/Header"));
const AsyncSidebar = loadable(() => import("../components/Sidebar"));
const AsyncFooter = loadable(() => import("../components/Footer"));
const AsyncResultsList = loadable(() => import("../components/ResultsList"));
const AsyncContactForm = loadable(() => import("../components/ContactForm"));

const Results: FunctionComponent = () => {
    const resultsData = useSelector((state: RootState) => state.results);
    const footerData = useSelector((state: RootState) => state.footer);
    const contactFormData = useSelector((state: RootState) => state.contacForm);
    const coursesFormData = useSelector((state: RootState) => state.course.items);

    const selecters: ISelecters = sidebarFiltersTransform(coursesFormData);

    return (
        <>
            <AsyncHeader />
            <AsyncSidebar coursesMeta={coursesFormData} classes={selecters.classes} subjects={selecters.subjects} course_types={selecters.course_types} />
            <Page>
                <AsyncResultsList title={resultsData.title[0]} description={resultsData.description[0]} results={resultTransform(resultsData?.results)} />
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

export default Results;
