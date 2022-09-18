import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { paragraph } from "../../../animationConstants/Text";
import { ICard } from "../../../models/ICard";
import TextType from "../../../models/TextType";
import Text from "../../Text";

import { StyledLink, StyledCard, StyledLinkArrow, StyledDescriptionWrapper } from "./style";

const CardWithLink: FunctionComponent<ICard> = ({ widthLink = false, title, subTitle, uid }) => {
    const wrapperRef = useRef();

    useLayoutEffect(() => {
        if (wrapperRef.current) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    start: "bottom bottom",
                    trigger: wrapperRef.current,
                },
            });

            timeline.from(wrapperRef.current.querySelectorAll(".parahraph .children"), {
                ...paragraph.vars,
            });
        }
    }, []);

    return (
        <StyledLink href={`/course/${uid}`}>
            <StyledCard ref={wrapperRef} className="card">
                {widthLink && <StyledLinkArrow />}
                <StyledDescriptionWrapper>
                    <Text text={title.text} type={TextType.h4} spans={[]} withoutAnimation />
                    <Text text={subTitle} type={TextType.bodyCompact} spans={[]} withoutAnimation />
                </StyledDescriptionWrapper>
            </StyledCard>
        </StyledLink>
    );
};

export default CardWithLink;
