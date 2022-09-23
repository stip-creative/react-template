import React, { FunctionComponent, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import Text from "../Text";
import { IText } from "../../models/IText";
import TextType from "../../models/TextType";
import { ICard } from "../../models/ICard";
import Card from "../Card";
import CardsSlider from "../CardsSlider";

import { StyledWrapper, StyledDescriptionWrapper, StyledCardList } from "./style";

export interface IResultsList {
    title: IText;
    description: IText;
    results: ICard[];
}

const ResultsList: FunctionComponent<IResultsList> = ({ title, description, results }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
    const wrapperRef = useRef<HTMLElement>();

    if (isMobile) {
        return <CardsSlider title={title.text} description={description.text} cards={results} />;
    }

    return (
        <StyledWrapper ref={wrapperRef}>
            <StyledDescriptionWrapper className="description">
                <Text text={title.text} type={TextType.h3} spans={[]} />
                <Text text={description.text} type={TextType.body} spans={[]} />
            </StyledDescriptionWrapper>
            <StyledCardList>
                {results.map(card => (
                    <Card
                        key={card.description + card.subTitle}
                        uid={card.uid}
                        widthLink={card.widthLink}
                        title={card.title}
                        subTitle={card.subTitle}
                        description={card.description}
                        image={card.image}
                    />
                ))}
            </StyledCardList>
        </StyledWrapper>
    );
};

export default ResultsList;
