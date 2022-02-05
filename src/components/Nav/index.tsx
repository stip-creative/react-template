import React, { FunctionComponent } from "react";

import { StyledNavWrapper, StyledLink } from "./style";

const Nav: FunctionComponent = () => {
    return (
        <StyledNavWrapper>
            <StyledLink href="/">Home</StyledLink>
            <StyledLink href="/about">About</StyledLink>
        </StyledNavWrapper>
    );
};

export default Nav;
