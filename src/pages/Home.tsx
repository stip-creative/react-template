import React, { FunctionComponent } from "react";

import Animated3DSphere from "../components/Animated3DSphere";
import Title from "../components/Title";

const Home: FunctionComponent = () => {
    return (
        <div>
            <Title />
            <Animated3DSphere />
        </div>
    );
};

export default Home;
