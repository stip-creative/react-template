import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

import homeQuery from "../queries/home.graphql";
import SEO from "../components/Seo";
import Page from "../components/Page";
import WelcomeBlock from "../components/WelcomeBlock";
import TextType from "../models/TextType";
import { updateLoading } from "../slices/homeSlice";
import Facts from "../components/Facts";
import companyFactsTransform from "../utils/companyFactsTransform";
import AboutCourses from "../components/AboutCourses";
import CardsSlider from "../components/CardsSlider";
import aboutCoursesTransform from "../utils/aboutCoursesTransform";
import courseCarouselTransform from "../utils/courseCarouselTransform";
import teacherCarouselTransform from "../utils/teacherCarouselTransform";
import ReviewSlider from "../components/ReviewSlider";
import reviewTransform from "../utils/reviewTransform";
import Dropdown from "../components/Dropdown";
import dropdownTransform from "../utils/dropdownTransform";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Sidebar from "../components/Sidebar";
import sidebarFiltersTransform from "../utils/sidebarFiltersTransform";
import { ISelecters } from "../models/ISelecters";
import { ICourseMeta } from "../models/ICourseMeta";
import HomeMap from "../components/Map/HomeMap";

const Home: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { data, loading } = useQuery(homeQuery);

    useEffect(() => {
        dispatch(updateLoading(loading));
    }, [dispatch, loading]);

    if (loading) return null;

    const homeData = data?.page?.edges[0]?.node;
    const globalSeo = data?.global?.edges[0]?.node;
    const footerData = data?.allFooters?.edges[0]?.node;
    const contactFormData = data?.allContact_forms?.edges[0]?.node;
    const coursesFormData = data?.allCourses?.edges;
    const mapItems = data?.page?.edges[0].node.map.offices;

    const selecters: ISelecters = sidebarFiltersTransform(coursesFormData);
    const coursesMeta: ICourseMeta[] = coursesFormData.map(item => item.node);

    return (
        <>
            <Header />
            <Sidebar coursesMeta={coursesMeta} classes={selecters.classes} subjects={selecters.subjects} course_types={selecters.course_types} />
            <Page>
                <SEO seo={homeData?.seo} defaultSeo={globalSeo} />
                <WelcomeBlock
                    title={homeData?.first_title[0].text}
                    titleSpans={homeData?.first_title[0].spans}
                    subTitle={homeData?.first_sub_title[0].text}
                    subTitleSpans={homeData?.first_sub_title[0].spans}
                    image={homeData?.main_image}
                />
                <Facts
                    title={homeData?.about_company_title[0].text}
                    titleType={TextType.h2}
                    titleSpans={homeData?.about_company_title[0].spans}
                    facts={companyFactsTransform(homeData?.company_facts)}
                />
                <AboutCourses
                    title={homeData?.about_courses_title[0].text}
                    description={homeData?.about_courses_description[0].text}
                    courses={aboutCoursesTransform(homeData?.courses_group)}
                />
                <CardsSlider
                    title={homeData?.course_carousel_title[0].text}
                    description={homeData?.course_carousel_description[0].text}
                    cards={courseCarouselTransform(homeData?.courses_carousel)}
                />
                <CardsSlider
                    title={homeData?.teacher_carousel_title[0].text}
                    description={homeData?.teacher_carousel_description[0].text}
                    cards={teacherCarouselTransform(homeData?.teacher_carousel)}
                />
                <ReviewSlider title={homeData?.review_title[0].text} reviwes={reviewTransform(homeData?.review_carousel)} />
                <Dropdown data={dropdownTransform(homeData?.dropdown)} />
                <HomeMap title={homeData.map_title[0].text} mapItems={mapItems} />
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

export default Home;
