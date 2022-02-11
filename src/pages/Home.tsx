import React, { FunctionComponent } from "react";

import SEO from "../components/Seo";
import Title from "../components/Title";
import ISeo from "../models/ISeo";
import favicon from "../../public/favicon-16x16.png";
import Page from "../components/Page";

const demoSeo: ISeo = {
    metaTitle: "HOME",
    metaDescription: "HOME",
    shareImage: {
        url: favicon,
    },
    favicon: {
        url: favicon,
    },
};

const Home: FunctionComponent = () => {
    return (
        <Page>
            <SEO seo={demoSeo} defaultSeo={demoSeo} />
            <Title title="home" />
        </Page>
    );
};

export default Home;
