import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import ButtonType from "../../models/ButtonType";
import TextType from "../../models/TextType";
import { updateIsOpenSidebar } from "../../slices/homeSlice";
import { allScrollClasser } from "../../styles/variables";
import Button from "../Button";
import Text from "../Text";

import HeaderMobile from "./Mobile";
import { StyledWrapper, StyledLogo, StyledLink, StyledLinkWrapper } from "./style";

const Header: FunctionComponent = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
    const dispatch = useDispatch();

    const wrapperRef = useRef<HTMLElement>();
    const scrollBefore = useRef<number>();

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        let scroll = scrollBefore.current;

        const handleScroll = () => {
            const scrolled = window.scrollY;

            if (scroll > scrolled) {
                wrapper.classList.remove(...allScrollClasser);
                wrapper.classList.add("scroll-up");
                scroll = scrolled;
            } else {
                wrapper.classList.remove(...allScrollClasser);
                wrapper.classList.add("scroll-down");
                scroll = scrolled;
            }
        };

        if (wrapper) {
            wrapper.classList.remove(...allScrollClasser);
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const onButtonClick = () => {
        dispatch(updateIsOpenSidebar(true));
    };

    if (isMobile) return <HeaderMobile />;

    return (
        <StyledWrapper ref={wrapperRef}>
            <StyledLink to="/">
                <StyledLogo />
            </StyledLink>
            <StyledLinkWrapper>
                <StyledLink to="/teachers">
                    <Text text="Преподаватели" type={TextType.bodyXSmall} spans={[]} withoutAnimation />
                </StyledLink>
                <StyledLink to="/results">
                    <Text text="Результаты учеников" type={TextType.bodyXSmall} spans={[]} withoutAnimation />
                </StyledLink>
                <StyledLink to="/contact">
                    <Text text="Контакты" type={TextType.bodyXSmall} spans={[]} withoutAnimation />
                </StyledLink>
            </StyledLinkWrapper>
            <Button onClick={onButtonClick} text="Подобрать курс" type={ButtonType.primary} withoutAnimation isSmall withBurger />
        </StyledWrapper>
    );
};

export default Header;
