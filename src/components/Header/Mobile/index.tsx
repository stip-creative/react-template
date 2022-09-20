import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import useLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";
import TextType from "../../../models/TextType";
import { allScrollClasser } from "../../../styles/variables";
import Text from "../../Text";
import { updateIsOpenSidebar } from "../../../slices/homeSlice";

import { StyledWrapper, StyledLogo, StyledLink, StyledMobileMenu, StyledMobileSideMenu, StyledMobileClose, StyledLinkButton } from "./style";

const HeaderMobile: FunctionComponent = () => {
    const wrapperRef = useRef<HTMLElement>();
    const scrollBefore = useRef<number>();
    const [tl, setTl] = useState<gsap.core.Timeline>();
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>();
    const location = useLocation();
    const dispatch = useDispatch();

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

    useEffect(() => {
        const timeline = gsap.timeline();

        if (timeline) {
            timeline.to(wrapperRef.current, { x: "100%", opacity: 0 });

            setTl(timeline);
        }

        const links = document.querySelectorAll("#side-menu a");

        if (links) {
            [...links].forEach(item => {
                if (item.pathname === location.pathname) {
                    item.classList.add("active");
                }
            });
        }
    }, [location.pathname]);

    useEffect(() => {
        if (!tl) return null;
        if (isOpenSidebar) {
            tl.reverse();
        } else {
            tl.play();
        }

        return null;
    }, [isOpenSidebar, tl]);

    const onButtonClick = () => {
        setIsOpenSidebar(!isOpenSidebar);
        dispatch(updateIsOpenSidebar(false));
    };

    const onSidebarButtonClick = () => {
        dispatch(updateIsOpenSidebar(true));
    };

    return (
        <>
            <StyledWrapper>
                <StyledLink to="/">
                    <StyledLogo />
                </StyledLink>
                {isOpenSidebar ? <StyledMobileClose onClick={onButtonClick} /> : <StyledMobileMenu onClick={onButtonClick} />}
            </StyledWrapper>
            <StyledMobileSideMenu id="side-menu" ref={wrapperRef}>
                <StyledLinkButton onClick={onSidebarButtonClick}>
                    <Text text="Подобрать курс" type={TextType.h2} spans={[]} withoutAnimation />
                </StyledLinkButton>
                <StyledLink to="/">
                    <Text text="Главная" type={TextType.h2} spans={[]} withoutAnimation />
                </StyledLink>
                <StyledLink to="/teachers">
                    <Text text="Преподаватели" type={TextType.h2} spans={[]} withoutAnimation />
                </StyledLink>
                <StyledLink to="/results">
                    <Text text="Результаты учеников" type={TextType.h2} spans={[]} withoutAnimation />
                </StyledLink>
                <StyledLink to="/contact">
                    <Text text="Контакты" type={TextType.h2} spans={[]} withoutAnimation />
                </StyledLink>
            </StyledMobileSideMenu>
        </>
    );
};

export default HeaderMobile;
