import React from "react";
import { useSelector } from "react-redux";
import loadable from "@loadable/component";

import { RootState } from "../store";
import Page from "../components/Page";
import TextType from "../models/TextType";
import companyFactsTransform from "../utils/companyFactsTransform";
import aboutCoursesTransform from "../utils/aboutCoursesTransform";
import courseCarouselTransform from "../utils/courseCarouselTransform";
import reviewTransform from "../utils/reviewTransform";
import teacherCarouselTransform from "../utils/teacherCarouselTransform";
import SEO from "../components/Seo";

const AsyncWelcomeBlock = loadable(() => import("../components/WelcomeBlock"));
const AsyncFacts = loadable(() => import("../components/Facts"));
const AsyncAboutCourses = loadable(() => import("../components/AboutCourses"));
const AsyncCardsSlider = loadable(() => import("../components/CardsSlider"));
const AsyncReviewSlider = loadable(() => import("../components/ReviewSlider"));
const AsyncHomeMap = loadable(() => import("../components/Map/HomeMap"));
const AsyncContactForm = loadable(() => import("../components/ContactForm"));
const AsyncFooter = loadable(() => import("../components/Footer"));
const AsyncHeader = loadable(() => import("../components/Header"));

const Home = () => {
    const homeData = useSelector((state: RootState) => state.home);
    const globalSeo = useSelector((state: RootState) => state.global);
    const footerData = useSelector((state: RootState) => state.footer);
    const contactFormData = useSelector((state: RootState) => state.contacForm);

    return (
        <>
            <AsyncHeader />
            <Page>
                <SEO seo={homeData?.seo} defaultSeo={globalSeo} />
                <AsyncWelcomeBlock
                    title={homeData?.first_title[0].text}
                    titleSpans={homeData?.first_title[0].spans}
                    subTitle={homeData?.first_sub_title[0].text}
                    subTitleSpans={homeData?.first_sub_title[0].spans}
                    image={homeData?.main_image}
                />
                <AsyncFacts
                    title={homeData?.about_company_title[0].text}
                    titleType={TextType.h2}
                    titleSpans={homeData?.about_company_title[0].spans}
                    facts={companyFactsTransform(homeData?.company_facts)}
                />
                <AsyncAboutCourses
                    title={homeData?.about_courses_title[0].text}
                    description={homeData?.about_courses_description[0].text}
                    courses={aboutCoursesTransform(homeData?.courses_group)}
                />
                <AsyncCardsSlider
                    title={homeData?.course_carousel_title[0].text}
                    description={homeData?.course_carousel_description[0].text}
                    cards={courseCarouselTransform(homeData?.courses_carousel)}
                />
                <AsyncCardsSlider
                    title={homeData?.teacher_carousel_title[0].text}
                    description={homeData?.teacher_carousel_description[0].text}
                    cards={teacherCarouselTransform(homeData?.teacher_carousel)}
                />
                <AsyncReviewSlider title={homeData?.review_title[0].text} reviwes={reviewTransform(homeData?.review_carousel)} />
                <AsyncHomeMap title={homeData.map_title[0].text} mapItems={homeData?.map.offices} />
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

export default Home;
