import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";

import Page from "../components/Page";
import resultTransform from "../utils/resultTransform";
import { RootState } from "../store";
import SEO from "../components/Seo";

const AsyncHeader = loadable(() => import("../components/Header"));
const AsyncFooter = loadable(() => import("../components/Footer"));
const AsyncResultsList = loadable(() => import("../components/ResultsList"));
const AsyncContactForm = loadable(() => import("../components/ContactForm"));

const Results: FunctionComponent = () => {
    const resultsData = useSelector((state: RootState) => state.results);
    const globalSeo = useSelector((state: RootState) => state.global);
    const footerData = useSelector((state: RootState) => state.footer);
    const contactFormData = useSelector((state: RootState) => state.contacForm);

    return (
        <>
            <AsyncHeader />
            <Page>
                <SEO seo={resultsData?.seo} defaultSeo={globalSeo} />
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
