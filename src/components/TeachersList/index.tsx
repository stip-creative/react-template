import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import Text from "../Text";
import { IText } from "../../models/IText";
import TextType from "../../models/TextType";
import { ICard } from "../../models/ICard";
import Card from "../Card";
import { RootState } from "../../store";
import { mainTitle, paragraph } from "../../animationConstants/Text";
import CardsSlider from "../CardsSlider";

import { StyledWrapper, StyledDescriptionWrapper, StyledCardList } from "./style";

export interface ITeachersList {
    title: IText;
    description: IText;
    teachers: ICard[];
}

const TeachersList: FunctionComponent<ITeachersList> = ({ title, description, teachers }) => {
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
        return <CardsSlider title={title.text} description={description.text} cards={teachers} />;
    }

    return (
        <StyledWrapper ref={wrapperRef}>
            <StyledDescriptionWrapper className="description">
                <Text text={title.text} type={TextType.h3} spans={[]} withoutAnimation />
                <Text text={description.text} type={TextType.body} spans={[]} withoutAnimation />
            </StyledDescriptionWrapper>
            <StyledCardList>
                {teachers.map((card, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Card key={index} uid={card.uid} widthLink={card.widthLink} title={card.title} subTitle={card.subTitle} description={card.description} image={card.image} />
                ))}
            </StyledCardList>
        </StyledWrapper>
    );
};

export default TeachersList;
