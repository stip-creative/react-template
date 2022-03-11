import React, { FunctionComponent, PropsWithChildren } from "react";

// import useCustomScroll from "../../hooks/useCustomScroll";

import StyledPageWrapper from "./style";

const Page: FunctionComponent<PropsWithChildren<Record<never, never>>> = ({ children }) => {
    return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default Page;
