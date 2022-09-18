import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import { RootState } from "../store";

const Home = () => {
    const title = useSelector((state: RootState) => state.home.seo.metatitle);

    console.log(title);

    return (
        <div>
            <Helmet>
                <title>Universal Page</title>
                <meta name="description" content="Modern Web App - Home Page" />
            </Helmet>
            <h1>Welcome to the page of Universal Web App</h1>
        </div>
    );
};

export default Home;
