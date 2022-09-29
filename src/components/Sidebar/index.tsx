import React, { FunctionComponent, useEffect, useRef, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import ButtonType from "../../models/ButtonType";
import TextType from "../../models/TextType";
import { RootState } from "../../store";
import Button from "../Button";
import Text from "../Text";
import { ISelecters } from "../../models/ISelecters";
import { ISidebarDate } from "../../models/ISidebarDate";
import { updateIsOpenSidebar } from "../../slices/homeSlice";
import { ISelectItem } from "../../models/ISelectItem";
import { ICourseMeta } from "../../models/ICourseMeta";
import sidebarFiltersTransform from "../../utils/sidebarFiltersTransform";
import useSidebbarAnimation from "../../hooks/useSidebbarAnimation";

import SelectMenu from "./Select";
import { StyledBg, StyledClose, StyledSidebarWrapper } from "./style";

export interface ISidebar extends ISelecters {
    coursesMeta: ICourseMeta[];
}

export interface IVariables {
    course_type?: string;
    subject?: string;
}

const Sidebar: FunctionComponent<ISelecters> = ({ classes, course_types, subjects, coursesMeta }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

    const wrapperRef = useRef();

    const isOpenSidebar = useSelector((state: RootState) => state.home.isOpenSidebar);

    const bgRef = useRef();
    const [sidebarDate, setSidebarDate] = useState<ISidebarDate>({
        course_type: {
            value: null,
            isSelected: false,
        },
        subject: {
            value: null,
            isSelected: false,
        },
        class: {
            value: null,
            isSelected: false,
        },
    });
    const [availableClasses, setAvailableClasses] = useState<ISelectItem[]>(classes);
    const [availableSubjects, setAvailableSubjects] = useState<ISelectItem[]>(subjects);

    const isSubjectsDisabled = useMemo(() => {
        return !sidebarDate.course_type.isSelected || sidebarDate.course_type.value === "Подготовка к школе" || sidebarDate.course_type.value === "Начальная школа";
    }, [sidebarDate]);
    const isClassesDisabled = useMemo(() => {
        return (
            (!sidebarDate.course_type.isSelected && sidebarDate.course_type.value !== "Начальная школа") ||
            sidebarDate.course_type.value === "Подготовка к школе" ||
            sidebarDate.course_type.value === "Подготовка к ЦТ"
        );
    }, [sidebarDate]);

    const onBgScroll = (e: Event): boolean => {
        e.preventDefault();
        e.stopPropagation();

        return false;
    };

    useEffect(() => {
        const bg = bgRef.current;
        const wrapper = wrapperRef.current;

        if (bg && wrapper) {
            bg.addEventListener("wheel", onBgScroll, { passive: false });
            wrapper.addEventListener("wheel", onBgScroll, { passive: false });
        }

        return () => {
            if (bg && wrapper) {
                bg.removeEventListener("wheel", onBgScroll, { passive: false });
                wrapper.removeEventListener("wheel", onBgScroll, { passive: false });
            }
        };
    }, []);

    useEffect(() => {
        if (isSubjectsDisabled) {
            setSidebarDate({
                ...sidebarDate,
                subject: {
                    value: null,
                    isSelected: false,
                },
            });
        }

        if (isClassesDisabled) {
            setSidebarDate({
                ...sidebarDate,
                subject: {
                    value: null,
                    isSelected: false,
                },
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubjectsDisabled, isClassesDisabled]);

    useEffect(() => {
        const getAvailableCourses = (variables: IVariables) => {
            let result;

            result = coursesMeta.filter((item: ICourseMeta) => {
                return item.node.course_type === variables?.course_type;
            });

            if (variables.subject) {
                result = result.filter((item: ICourseMeta) => {
                    return item.node.subject === variables?.subject;
                });
            }

            return result;
        };

        const getAvailableItems = async () => {
            const variables: IVariables = {};

            if (sidebarDate.course_type.value && sidebarDate.course_type.isSelected) {
                variables.course_type = sidebarDate.course_type.value;
            }

            if (sidebarDate.subject.value && sidebarDate.subject.isSelected) {
                variables.subject = sidebarDate.subject.value;
            }

            const classesResult = getAvailableCourses(variables);
            const subjectsResult = getAvailableCourses({
                course_type: variables.course_type,
            });

            const selectersForClasses: ISelecters = sidebarFiltersTransform(classesResult);
            const selectersForSubjects: ISelecters = sidebarFiltersTransform(subjectsResult);

            setAvailableClasses(selectersForClasses.classes);
            setAvailableSubjects(selectersForSubjects.subjects);
        };

        getAvailableItems();
    }, [coursesMeta, sidebarDate]);

    const onCloseClick = () => {
        dispatch(updateIsOpenSidebar(!isOpenSidebar));
    };

    const onChangeCourseType = (name: string, value: ISelectItem) => {
        setSidebarDate({
            ...sidebarDate,
            course_type: {
                value: value.value,
                isSelected: true,
            },
        });
    };

    const onChangeSubjects = (name: string, value: ISelectItem) => {
        setSidebarDate({
            ...sidebarDate,
            subject: {
                value: value.value,
                isSelected: true,
            },
        });
    };

    const onChangeСlass = (name: string, value: ISelectItem) => {
        setSidebarDate({
            ...sidebarDate,
            class: {
                value: value.label,
                isSelected: true,
            },
        });
    };

    const onButtonClick = () => {
        const course = coursesMeta.find(
            (meta: ICourseMeta) =>
                meta.node.class === sidebarDate.class.value && meta.node.course_type === sidebarDate.course_type.value && meta.node.subject === sidebarDate.subject.value
        );

        const uid = course?.node?.meta?.uid;

        // eslint-disable-next-line no-underscore-dangle
        if (uid) {
            // eslint-disable-next-line no-underscore-dangle
            navigate(`/course/${uid}`);
            dispatch(updateIsOpenSidebar(!isOpenSidebar));
        }
    };

    const onSecondaryButtonClick = () => {
        dispatch(updateIsOpenSidebar(!isOpenSidebar));
    };

    useSidebbarAnimation(isOpenSidebar);

    return (
        <>
            <StyledBg id="sidebar-bg" ref={bgRef} />
            <StyledSidebarWrapper id="wrapper-bg" ref={wrapperRef}>
                <StyledClose onClick={onCloseClick} />
                <Text text="Какой курс вы ищете?" type={TextType.h3} spans={[]} withoutAnimation />
                <SelectMenu
                    title="Тип курса"
                    placeholder="Веберите тип курса"
                    onChange={onChangeCourseType}
                    isDisabled={false}
                    selectOptions={course_types}
                    isTopPlacement={isMobile}
                />
                <SelectMenu
                    title="Предмет"
                    placeholder="Веберите предмет"
                    onChange={onChangeSubjects}
                    isDisabled={isSubjectsDisabled}
                    selectOptions={availableSubjects}
                    isTopPlacement={isMobile}
                />
                <SelectMenu
                    title="Класс"
                    placeholder="Выберите класс ученика"
                    onChange={onChangeСlass}
                    isDisabled={isClassesDisabled}
                    selectOptions={availableClasses}
                    isTopPlacement
                />
                <Button onClick={onButtonClick} text="Подобрать курс" type={ButtonType.primary} withoutAnimation withArrow />
                {isMobile && <Button onClick={onSecondaryButtonClick} text="Назад" type={ButtonType.secondary} withoutAnimation />}
            </StyledSidebarWrapper>
        </>
    );
};

export default Sidebar;
