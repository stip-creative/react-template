import React, { FunctionComponent, useRef } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import useLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";
import Text from "../Text";
import { IText } from "../../models/IText";
import TextType from "../../models/TextType";
import { ICard } from "../../models/ICard";
import Card from "../Card";
import { mainTitle, paragraph } from "../../animationConstants/Text";
import { RootState } from "../../store";
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
    const timeLine = useSelector((state: RootState) => state.animations.welcomeTimeLine);

    useLayoutEffect(() => {
        if (wrapperRef.current) {
            timeLine
                .from(
                    wrapperRef.current.querySelectorAll(".description h3 .parent"),
                    {
                        ...mainTitle.parent.vars,
                    },
                    1.8
                )
                .from(
                    wrapperRef.current.querySelectorAll(".description h3 .parent > span, .description h3 .parent > b"),
                    {
                        ...mainTitle.children.vars,
                    },
                    1.8
                )
                .from(
                    wrapperRef.current.querySelectorAll(".parahraph .children"),
                    {
                        ...paragraph.vars,
                    },
                    1.8
                );
        }
    }, [timeLine]);

    if (isMobile) {
        return <CardsSlider title={title.text} description={description.text} cards={results} />;
    }

    return (
        <StyledWrapper ref={wrapperRef}>
            <StyledDescriptionWrapper className="description">
                <Text text={title.text} type={TextType.h3} spans={[]} withoutAnimation />
                <Text text={description.text} type={TextType.body} spans={[]} withoutAnimation />
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
