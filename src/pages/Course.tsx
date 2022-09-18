import React, { FunctionComponent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import courseQuery from "../queries/course.graphql";
import SEO from "../components/Seo";
import Page from "../components/Page";
import WelcomeBlock from "../components/WelcomeBlock";
import TextType from "../models/TextType";
import { updateLoading } from "../slices/homeSlice";
import Facts from "../components/Facts";
import companyFactsTransform from "../utils/companyFactsTransform";
import CardsSlider from "../components/CardsSlider";
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
import CourseMap from "../components/Map/CourseMap";
import Cost from "../components/Cost";

const Course: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { uid } = useParams();

    const { data, loading } = useQuery(courseQuery, {
        variables: { uid },
    });

    useEffect(() => {
        dispatch(updateLoading(loading));
    }, [dispatch, loading]);

    if (loading) return null;

    const courseData = data?.page?.edges[0]?.node;
    const globalSeo = data?.global?.edges[0]?.node;
    const footerData = data?.allFooters?.edges[0]?.node;
    const contactFormData = data?.allContact_forms?.edges[0]?.node;
    const coursesFormData = data?.sidebar?.edges;
    const mapItems = data?.page?.edges[0].node.map.offices;

    const selecters: ISelecters = sidebarFiltersTransform(coursesFormData);
    const coursesMeta: ICourseMeta[] = coursesFormData.map(item => item.node);

    return (
        <>
            <Header />
            <Sidebar coursesMeta={coursesMeta} classes={selecters.classes} subjects={selecters.subjects} course_types={selecters.course_types} />
            <Page>
                <SEO seo={courseData?.seo} defaultSeo={globalSeo} />
                <WelcomeBlock
                    title={courseData?.title[0].text}
                    titleSpans={courseData?.title[0].spans}
                    subTitle={courseData?.sub_title[0].text}
                    subTitleSpans={courseData?.sub_title[0].spans}
                    image={courseData?.main_image}
                />
                <Facts
                    title={courseData?.about_company_title[0].text}
                    titleType={TextType.h2}
                    titleSpans={courseData?.about_company_title[0].spans}
                    facts={companyFactsTransform(courseData?.company_facts)}
                />
                <CardsSlider
                    title={courseData?.teacher_carousel_title[0].text}
                    description={courseData?.teacher_carousel_description[0].text}
                    cards={teacherCarouselTransform(courseData?.teacher_carousel)}
                />
                <ReviewSlider title={courseData?.review_title[0].text} reviwes={reviewTransform(courseData?.review_carousel)} />
                <Dropdown data={dropdownTransform(courseData?.dropdown)} />
                <CourseMap title={courseData?.map_title[0].text} mapItems={mapItems} />
                <Cost
                    title={courseData?.cost_of_education_title[0].text}
                    slogan={courseData?.cost_of_education_slogan[0].text}
                    price={courseData?.cost_of_education_price[0].text}
                    priceSubtitle={courseData?.cost_of_education_price_subtitle[0].text}
                    discount={courseData?.cost_of_education_discount[0].text}
                    discountSubtitle={courseData?.cost_of_education_discount_subtitle[0].text}
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

export default Course;
