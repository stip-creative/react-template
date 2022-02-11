import React, { FunctionComponent } from "react";

import SEO from "../components/Seo";
import Title from "../components/Title";
import ISeo from "../models/ISeo";
import favicon from "../../public/favicon-16x16.png";

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
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
            }}
        >
            <SEO seo={demoSeo} defaultSeo={demoSeo} />
            <Title />
        </div>
    );
};

export default About;
