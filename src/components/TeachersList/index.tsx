import React, { FunctionComponent, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import Text from "../Text";
import { IText } from "../../models/IText";
import TextType from "../../models/TextType";
import { ICard } from "../../models/ICard";
import Card from "../Card";
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

    if (isMobile) {
        return <CardsSlider title={title.text} description={description.text} cards={teachers} />;
    }

    return (
        <StyledWrapper ref={wrapperRef}>
            <StyledDescriptionWrapper className="description">
                <Text text={title.text} type={TextType.h3} spans={[]} />
                <Text text={description.text} type={TextType.body} spans={[]} />
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
