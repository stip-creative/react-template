import React, { FunctionComponent, useRef } from "react";
import { useDispatch } from "react-redux";

import ButtonType from "../../models/ButtonType";
import TextType from "../../models/TextType";
import { updateIsOpenSidebar } from "../../slices/homeSlice";
import { ICourse } from "../../models/ICourse";
import Button from "../Button";
import Text from "../Text";
import useImageScrollTrigger from "../../hooks/useImageScrollTrigger";

import { StyledAboutCoursesFullViewWrapper, StyledFigure, StyledFourth, StyledImg, StyledTextWrapper, StyledThird, StyledTwoThird, StyledWrapper } from "./style";

export interface IAboutCourses {
    title: string;
    description: string;
    courses: ICourse[];
}

const AboutCourses: FunctionComponent<IAboutCourses> = ({ title, description, courses }) => {
    const dispatch = useDispatch();
    const imgRef = useRef();

    const onButtonClick = () => {
        dispatch(updateIsOpenSidebar(true));
    };

    useImageScrollTrigger(imgRef);

    return (
        <StyledAboutCoursesFullViewWrapper>
            <StyledWrapper>
                <StyledThird>
                    <div>
                        <Text text={title} type={TextType.h3} spans={[]} withoutAnimation withoutLineBreak />
                        <Text text={description} type={TextType.body} spans={[]} withoutAnimation withoutLineBreak />
                    </div>
                    <Button onClick={onButtonClick} text="Подобрать курс" type={ButtonType.primary} withoutAnimation />
                </StyledThird>
                <StyledTwoThird>
                    {courses.map(course => (
                        <StyledFourth className="fourth" key={course.title.text}>
                            <StyledFigure className="figure">
                                <StyledImg ref={imgRef} src={course.image.url} alt={course.image.alt} />
                            </StyledFigure>
                            <StyledTextWrapper>
                                <Text type={TextType.h4} text={course.title.text} />
                                <Text type={TextType.bodyCompact} text={course.description.text} />
                            </StyledTextWrapper>
                        </StyledFourth>
                    ))}
                </StyledTwoThird>
            </StyledWrapper>
        </StyledAboutCoursesFullViewWrapper>
    );
};

export default AboutCourses;
