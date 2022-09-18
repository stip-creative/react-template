import React, { FunctionComponent, PropsWithChildren } from "react";

import StyledFullViewWrapper from "./style";

const FullViewWrapper: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return <StyledFullViewWrapper>{children}</StyledFullViewWrapper>;
};

export default FullViewWrapper;
