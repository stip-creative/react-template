import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import { paragraph } from "../../../animationConstants/Text";
import { ICard } from "../../../models/ICard";
import TextType from "../../../models/TextType";
import Text from "../../Text";

import { StyledCard, StyledFigure, StyledImg, StyledDescriptionWrapper } from "./style";

const CardWithLink: FunctionComponent<ICard> = ({ title, subTitle, description, image }) => {
    const wrapperRef = useRef<HTMLElement>();

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const timeline = gsap.timeline();

        const handleMouseEnter = () => {
            timeline.restart();
        };

        const handleMouseOver = () => {
            timeline.reverse();
        };

        if (wrapper) {
            const tween = gsap.from(wrapper.querySelectorAll(".parahraph .children"), {
                ...paragraph.vars,
            });

            timeline.add(tween);

            wrapper.addEventListener("mouseenter", handleMouseEnter);
            wrapper.addEventListener("mouseover", handleMouseOver);
        }

        return () => {
            wrapper.removeEventListener("mouseenter", handleMouseEnter);
            wrapper.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <StyledCard ref={wrapperRef}>
            <StyledFigure>
                <StyledImg src={image.url} alt={image.alt} />
            </StyledFigure>
            <StyledDescriptionWrapper>
                <Text text={title.text} type={TextType.h4} spans={[]} withoutAnimation />
                <Text text={subTitle} type={TextType.bodyCompact} spans={[]} withoutAnimation />
                <Text text={description} type={TextType.bodyLarge} spans={[]} withoutAnimation />
            </StyledDescriptionWrapper>
        </StyledCard>
    );
};

export default CardWithLink;
