import React, { FunctionComponent } from "react";

import SEO from "../components/Seo";
import Title from "../components/Title";
import ISeo from "../models/ISeo";
import favicon from "../../public/favicon-16x16.png";
import Page from "../components/Page";

const demoSeo: ISeo = {
    metaTitle: "ABOUT",
    metaDescription: "ABOUT",
    shareImage: {
        url: favicon,
    },
    favicon: {
        url: favicon,
    },
};

const About: FunctionComponent = () => {
    return (
        <Page>
            <SEO seo={demoSeo} defaultSeo={demoSeo} />
            <Title title="About" />
        </Page>
    );
};

export default About;
