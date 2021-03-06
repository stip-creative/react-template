import React, { FunctionComponent, PropsWithChildren, useRef } from "react";

import useCustomScroll from "../../hooks/useCustomScroll";
import BackCanvas from "../MultiPageCanvas/BackCanvas";

import StyledPageWrapper from "./style";

const Page: FunctionComponent<PropsWithChildren<Record<never, never>>> = ({ children }) => {
    const scrollableRef = useRef<HTMLElement>();

    useCustomScroll(scrollableRef);

    return (
        <StyledPageWrapper ref={scrollableRef}>
            <BackCanvas />
            {children}
        </StyledPageWrapper>
    );
};

export default Page;
