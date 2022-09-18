import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { useDispatch } from "react-redux";

import ButtonType from "../../models/ButtonType";
import TextType from "../../models/TextType";
import { updateIsOpenSidebar } from "../../slices/homeSlice";
import { ICourse } from "../../models/ICourse";
import Button from "../Button";
import Text from "../Text";
import { paragraph } from "../../animationConstants/Text";

import { StyledAboutCoursesFullViewWrapper, StyledFigure, StyledFourth, StyledImg, StyledTextWrapper, StyledThird, StyledTwoThird, StyledWrapper } from "./style";

export interface IAboutCourses {
    title: string;
    description: string;
    courses: ICourse[];
}

const AboutCourses: FunctionComponent<IAboutCourses> = ({ title, description, courses }) => {
    const dispatch = useDispatch();
    const wrapperRef = useRef();

    useLayoutEffect(() => {
        if (wrapperRef.current) {
            const fourthTimeline = gsap.timeline({
                scrollTrigger: {
                    start: "top bottom",
                    trigger: wrapperRef.current,
                },
            });

            fourthTimeline
                .from(
                    wrapperRef.current.querySelectorAll(".fourth .parahraph .children"),
                    {
                        ...paragraph.vars,
                    },
                    1
                )
                .from(
                    wrapperRef.current.querySelectorAll(".fourth .figure"),
                    {
                        opacity: 0,
                        stagger: 0.1,
                    },
                    1
                );
        }
    }, []);

    const onButtonClick = () => {
        dispatch(updateIsOpenSidebar(true));
    };

    return (
        <StyledAboutCoursesFullViewWrapper>
            <StyledWrapper ref={wrapperRef}>
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
                                <StyledImg src={course.image.url} alt={course.image.alt} />
                            </StyledFigure>
                            <StyledTextWrapper>
                                <Text type={TextType.h4} text={course.title.text} withoutAnimation />
                                <Text type={TextType.bodyCompact} text={course.description.text} withoutAnimation />
                            </StyledTextWrapper>
                        </StyledFourth>
                    ))}
                </StyledTwoThird>
            </StyledWrapper>
        </StyledAboutCoursesFullViewWrapper>
    );
};

export default AboutCourses;
