import React, { FunctionComponent, useRef } from "react";

import { IReview } from "../../../models/IReview";
import TextType from "../../../models/TextType";
import Text from "../../Text";

import { StyledReview, StyledFigure, StyledImg, StyledOwner, StyledOwnerDescription, StyledQuotes, StyledReviewWrapper } from "./style";

const Review: FunctionComponent<IReview> = ({ review, owner, owner_photo, year }) => {
    const wrapperRef = useRef();

    return (
        <StyledReview ref={wrapperRef}>
            <StyledReviewWrapper>
                <StyledQuotes />
                <Text text={review.text} type={TextType.quote} spans={[]} withoutAnimation />
            </StyledReviewWrapper>
            <StyledOwner>
                <StyledFigure>
                    <StyledImg src={owner_photo.url} alt={owner_photo.alt} />
                </StyledFigure>
                <StyledOwnerDescription>
                    <Text text={owner} type={TextType.bodyLarge} spans={[]} withoutAnimation />
                    <Text text={`${year} год`} type={TextType.bodyXSmall} spans={[]} withoutAnimation />
                </StyledOwnerDescription>
            </StyledOwner>
        </StyledReview>
    );
};

export default Review;
