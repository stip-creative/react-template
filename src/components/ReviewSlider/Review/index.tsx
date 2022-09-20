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

    useLayoutEffect(() => {
        if (wrapperRef.current) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    start: "top-=200 bottom",
                    trigger: wrapperRef.current,
                },
            });

            timeline
                .from(
                    wrapperRef.current.querySelectorAll(".children"),
                    {
                        ...paragraph.vars,
                    },
                    1
                )
                .from(
                    wrapperRef.current.querySelectorAll(".captions"),
                    {
                        duration: 0.25,
                        opacity: 0,
                    },
                    1
                )
                .from(
                    wrapperRef.current.querySelectorAll("svg"),
                    {
                        duration: 0.25,
                        opacity: 0,
                    },
                    1
                )
                .from(
                    wrapperRef.current.querySelectorAll("figure"),
                    {
                        duration: 0.25,
                        opacity: 0,
                    },
                    1
                );
        }
    }, []);

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
