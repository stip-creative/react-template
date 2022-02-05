import gsap from "gsap";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateTitle } from "../../slices/homeSlice";
import { RootState } from "../../store";

import { StyledWrapper, StyledTitle } from "./style";

const Title: FunctionComponent = () => {
    const dispatch = useDispatch();
    const title = useSelector((state: RootState) => state.home.title);
    const titleRef = useRef();

    const handleTitleClick = () => dispatch(updateTitle("Test!"));

    useEffect(() => {
        gsap.to(titleRef.current, { rotation: "+=360" });
    });

    return (
        <StyledWrapper>
            <StyledTitle ref={titleRef} onClick={handleTitleClick}>
                {title}
            </StyledTitle>
        </StyledWrapper>
    );
};

export default Title;
