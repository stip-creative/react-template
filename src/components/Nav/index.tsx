import React, { FunctionComponent } from "react";

import { StyledNavWrapper, StyledLink } from "./style";

const Nav: FunctionComponent = () => {
    return (
        <StyledNavWrapper>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </StyledNavWrapper>
    );
};

export default Nav;
