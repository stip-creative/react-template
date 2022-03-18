import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import SEO from "../components/Seo";
import Title from "../components/Title";
import Page from "../components/Page";
import { RootState } from "../store";

const About: FunctionComponent = () => {
    const seo = useSelector((state: RootState) => state.about.seo);

    return (
        <Page>
            <SEO seo={seo} defaultSeo={seo} />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
            <Title title="About" />
        </Page>
    );
};

export default About;
