import React, { FunctionComponent, useRef } from "react";

import TextType from "../../models/TextType";
import Text from "../Text";
import Slider from "../Slider";
import { IReview } from "../../models/IReview";

import { StyledWrapper, StyledDescriptionWrapper } from "./style";
import Review from "./Review";

export interface IReviewSlider {
    title: string;
    reviwes?: IReview[];
}

const ReviewSlider: FunctionComponent<IReviewSlider> = ({ title, reviwes }) => {
    const wrapperRef = useRef();

    return (
        <StyledWrapper ref={wrapperRef}>
            <StyledDescriptionWrapper className="description">
                <Text text={title} type={TextType.h3} spans={[]} withoutAnimation />
            </StyledDescriptionWrapper>
            <Slider slidesToShow={1}>
                {reviwes.map(reviwe => (
                    <Review key={reviwe.owner_photo.url} review={reviwe.review} owner_photo={reviwe.owner_photo} owner={reviwe.owner} year={reviwe.year} />
                ))}
            </Slider>
        </StyledWrapper>
    );
};

ReviewSlider.defaultProps = {
    reviwes: [],
};

export default ReviewSlider;
