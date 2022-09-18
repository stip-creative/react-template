import React, { FunctionComponent, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import TextType from "../../models/TextType";
import { ICard } from "../../models/ICard";
import Text from "../Text";
import Card from "../Card";
import Slider from "../Slider";

import { StyledWrapper, StyledDescriptionWrapper } from "./style";

export interface ICardsSlider {
    title: string;
    description: string;
    cards: ICard[];
}

const CardsSlider: FunctionComponent<ICardsSlider> = ({ title, description, cards }) => {
    const wrapperRef = useRef();
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

    return (
        <StyledWrapper ref={wrapperRef}>
            <StyledDescriptionWrapper className="description">
                <Text text={title} type={TextType.h3} spans={[]} withoutAnimation />
                <Text text={description} type={TextType.body} spans={[]} withoutAnimation />
            </StyledDescriptionWrapper>
            <Slider slidesToShow={isMobile ? 1 : 3}>
                {cards.map(card => (
                    <Card key={card.uid} uid={card.uid} widthLink={card.widthLink} title={card.title} subTitle={card.subTitle} description={card.description} image={card.image} />
                ))}
            </Slider>
        </StyledWrapper>
    );
};

export default CardsSlider;
