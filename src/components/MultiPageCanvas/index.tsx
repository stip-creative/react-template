import React, { FunctionComponent } from "react";

import BackCanvas from "./BackCanvas";
import FrontCanvas from "./FrontCanvas";

const MultiPageCanvas: FunctionComponent = () => {
    return (
        <>
            <BackCanvas />
            <FrontCanvas />
        </>
    );
};

export default MultiPageCanvas;
