import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import SEO from "../components/Seo";
import Title from "../components/Title";
import Page from "../components/Page";
import { RootState } from "../store";

const Home: FunctionComponent = () => {
    const seo = useSelector((state: RootState) => state.home.seo);

    return (
        <Page>
            <SEO seo={seo} defaultSeo={seo} />
            <Title title="Home" />
        </Page>
    );
};

export default Home;
