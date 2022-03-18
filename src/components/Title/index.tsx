import React, { FunctionComponent } from "react";

import { StyledWrapper, StyledTitle } from "./style";

export interface ITitle {
    title: string;
}

const Title: FunctionComponent<ITitle> = ({ title }) => {
    return (
        <StyledWrapper>
            <StyledTitle>{title}</StyledTitle>
        </StyledWrapper>
    );
};

export default Title;
