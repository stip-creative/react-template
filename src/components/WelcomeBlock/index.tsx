import React, { FunctionComponent, useRef } from "react";
import { useDispatch } from "react-redux";

import ButtonType from "../../models/ButtonType";
import { ITextSpan } from "../../models/ITextSpan";
import TextType from "../../models/TextType";
import Button from "../Button";
import FullViewWrapper from "../FullViewWrapper";
import Text from "../Text";
import { updateIsOpenSidebar } from "../../slices/homeSlice";
import { IImage } from "../../models/IImage";

import { StyledButtonWrapper, StyledFigure, StyledHalf, StyledImg, StyledSubTitleWrapper, StyledWrapper } from "./style";

export interface IWelcomeBlock {
    title: string;
    titleSpans: ITextSpan[];
    subTitle: string;
    subTitleSpans: ITextSpan[];
    image: IImage;
}

const WelcomeBlock: FunctionComponent<IWelcomeBlock> = ({ title, titleSpans, subTitle, subTitleSpans, image }) => {
    const dispatch = useDispatch();

    const wrapperRef = useRef();

    const onSecondaryButtonClick = () => {
        const form = document.querySelector("#form .form-wrapper");

        if (form) {
            const bounds = form.getBoundingClientRect();

            window.scrollTo(0, bounds.top + window.scrollY);
        }
    };

    const onButtonClick = () => {
        dispatch(updateIsOpenSidebar(true));
    };

    return (
        <FullViewWrapper>
            <StyledWrapper ref={wrapperRef}>
                <StyledHalf>
                    <Text text={title} type={TextType.h1} spans={titleSpans} />
                    <StyledSubTitleWrapper>
                        <Text text={subTitle} type={TextType.body} spans={subTitleSpans} />
                    </StyledSubTitleWrapper>
                    <StyledButtonWrapper>
                        <Button onClick={onButtonClick} text="Подобрать курс" type={ButtonType.primary} withoutAnimation />
                        <Button onClick={onSecondaryButtonClick} text="Получить консультацию" type={ButtonType.secondary} withoutAnimation />
                    </StyledButtonWrapper>
                </StyledHalf>
                <StyledHalf>
                    <StyledFigure>
                        <StyledImg src={image.url} alt={image.alt} />
                    </StyledFigure>
                </StyledHalf>
            </StyledWrapper>
        </FullViewWrapper>
    );
};

export default WelcomeBlock;
