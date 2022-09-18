import React, { FunctionComponent, PropsWithChildren } from "react";

import { StyledSlider, StyledSliderArrowLeft, StyledSliderArrowRight, StyledArrow } from "./style";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const NextArrow: FunctionComponent = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <StyledSliderArrowRight className={className} style={style} onClick={onClick}>
            <StyledArrow />
        </StyledSliderArrowRight>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrevArrow: FunctionComponent = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <StyledSliderArrowLeft className={className} style={style} onClick={onClick}>
            <StyledArrow />
        </StyledSliderArrowLeft>
    );
};

export interface ISlickSlider {
    slidesToShow: number;
}

const SlickSlider: FunctionComponent<PropsWithChildren<ISlickSlider>> = ({ slidesToShow, children }) => {
    const defaultSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        fade: false,
        slidesToShow,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <StyledSlider {...defaultSettings}>{children}</StyledSlider>;
};

export default SlickSlider;
