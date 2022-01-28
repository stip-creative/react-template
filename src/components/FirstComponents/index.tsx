import React, { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateTitle } from "../../slices/homeSlice";
import { RootState } from "../../store";

import { StyledWrapper, StyledTitle } from "./style";

const FirstComponents: FunctionComponent = () => {
    const dispatch = useDispatch();
    const title = useSelector((state: RootState) => state.home.title);

    const handleTitleClick = () => dispatch(updateTitle("Test!"));

    return (
        <StyledWrapper>
            <StyledTitle onClick={handleTitleClick}>{title}</StyledTitle>
        </StyledWrapper>
    );
};

export default FirstComponents;
