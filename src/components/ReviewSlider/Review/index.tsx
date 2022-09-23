import React, { FunctionComponent, useRef } from "react";
import gsap from "gsap";

import useLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";
import { IReview } from "../../../models/IReview";
import TextType from "../../../models/TextType";
import Text from "../../Text";
import { paragraph } from "../../../animationConstants/Text";

import { StyledReview, StyledFigure, StyledImg, StyledOwner, StyledOwnerDescription, StyledQuotes, StyledReviewWrapper } from "./style";

const Review: FunctionComponent<IReview> = ({ review, owner, owner_photo, year }) => {
    const wrapperRef = useRef();

    return (
        <StyledReview ref={wrapperRef}>
            <StyledReviewWrapper>
                <StyledQuotes />
                <Text text={review.text} type={TextType.quote} spans={[]} />
            </StyledReviewWrapper>
            <StyledOwner>
                <StyledFigure>
                    <StyledImg src={owner_photo.url} alt={owner_photo.alt} />
                </StyledFigure>
                <StyledOwnerDescription>
                    <Text text={owner} type={TextType.bodyLarge} spans={[]} />
                    <Text text={`${year} год`} type={TextType.bodyXSmall} spans={[]} />
                </StyledOwnerDescription>
            </StyledOwner>
        </StyledReview>
    );
};

export default Review;
