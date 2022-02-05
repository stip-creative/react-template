import React, { FunctionComponent } from "react";

import Animated3DSphere from "../components/Animated3DSphere";
import Title from "../components/Title";

const Home: FunctionComponent = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
            }}
        >
            <Title />
            <Animated3DSphere />
        </div>
    );
};

export default Home;
