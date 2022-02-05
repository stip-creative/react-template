import React, { FunctionComponent } from "react";

import Title from "../components/Title";

const About: FunctionComponent = () => {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                height: "100vh",
            }}
        >
            <Title />
        </div>
    );
};

export default About;
