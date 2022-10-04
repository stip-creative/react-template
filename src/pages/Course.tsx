import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadable from "@loadable/component";
import { useParams } from "react-router-dom";

import SEO from "../components/Seo";
import Page from "../components/Page";
import TextType from "../models/TextType";
import companyFactsTransform from "../utils/companyFactsTransform";
import teacherCarouselTransform from "../utils/teacherCarouselTransform";
import reviewTransform from "../utils/reviewTransform";
import Dropdown from "../components/Dropdown";
import dropdownTransform from "../utils/dropdownTransform";
import { getCourseByUID } from "../slices/coursesPages";
import { RootState } from "../store";

const AsyncWelcomeBlock = loadable(() => import("../components/WelcomeBlock"));
const AsyncFacts = loadable(() => import("../components/Facts"));
const AsyncCost = loadable(() => import("../components/Cost"));
const AsyncCardsSlider = loadable(() => import("../components/CardsSlider"));
const AsyncReviewSlider = loadable(() => import("../components/ReviewSlider"));
const AsyncCourseMap = loadable(() => import("../components/Map/CourseMap"));
const AsyncContactForm = loadable(() => import("../components/ContactForm"));
const AsyncFooter = loadable(() => import("../components/Footer"));

const Course: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { uid } = useParams();

    const { node } = dispatch(getCourseByUID(uid));
    const globalSeo = useSelector((state: RootState) => state.global);
    const footerData = useSelector((state: RootState) => state.footer);
    const contactFormData = useSelector((state: RootState) => state.contacForm);

    return (
        <Page>
            <SEO seo={node?.seo} defaultSeo={globalSeo} />
            <AsyncWelcomeBlock
                title={node?.title[0].text}
                titleSpans={node?.title[0].spans}
                subTitle={node?.sub_title[0].text}
                subTitleSpans={node?.sub_title[0].spans}
                image={node?.main_image}
            />
            <AsyncFacts
                title={node?.about_company_title[0].text}
                titleType={TextType.h2}
                titleSpans={node?.about_company_title[0].spans}
                facts={companyFactsTransform(node?.company_facts)}
            />
            <AsyncCardsSlider
                title={node?.teacher_carousel_title[0].text}
                description={node?.teacher_carousel_description[0].text}
                cards={teacherCarouselTransform(node?.teacher_carousel)}
            />
            <AsyncReviewSlider title={node?.review_title[0].text} reviwes={reviewTransform(node?.review_carousel)} />
            <Dropdown data={dropdownTransform(node?.dropdown)} />
            <AsyncCourseMap title={node?.map_title[0].text} mapItems={node?.map.offices} />
            <AsyncCost
                title={node?.cost_of_education_title[0].text}
                slogan={node?.cost_of_education_slogan[0].text}
                price={node?.cost_of_education_price[0].text}
                priceSubtitle={node?.cost_of_education_price_subtitle[0].text}
                discount={node?.cost_of_education_discount[0].text}
                discountSubtitle={node?.cost_of_education_discount_subtitle[0].text}
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
    );
};

export default Course;
