import React, { FunctionComponent, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import ButtonType from "../../models/ButtonType";
import Text from "../Text";
import TextType from "../../models/TextType";
import ButtonAnimation from "../../animationConstants/Button";

import { StyledArrow, StyledBurger, StyledButton } from "./style";

export interface IButton {
    type: ButtonType;
    text: string;
    withoutAnimation?: boolean;
    isSmall?: boolean;
    withBurger?: boolean;
    withArrow?: boolean;
    onClick?: () => void;
}

const Button: FunctionComponent<IButton> = ({ type, text, withoutAnimation, isSmall, withBurger, withArrow, onClick }) => {
    const btnRef = useRef<HTMLButtonElement>();
    const allHoverClasser = ["in-right", "in-left", "out-right", "out-left"];

    useLayoutEffect(() => {
        if (btnRef.current && !withoutAnimation) {
            gsap.from(btnRef.current, {
                ...ButtonAnimation.vars,
                scrollTrigger: ButtonAnimation.scrollTrigger(btnRef.current),
            });
        }
    }, [withoutAnimation]);

    const handelMouseEnter = e => {
        const btn = btnRef.current;

        if (!btn) return;

        const x = e.pageX - btn.offsetLeft;

        if (x > btn.clientWidth / 2) {
            btn.classList.remove(...allHoverClasser);
            btn.classList.add("in-right");
        } else {
            btn.classList.remove(...allHoverClasser);
            btn.classList.add("in-left");
        }
    };

    const handelMouseLeave = e => {
        const btn = btnRef.current;

        if (!btn) return;

        const x = e.pageX - btn.offsetLeft;

        if (x > btn.clientWidth / 2) {
            btn.classList.remove(...allHoverClasser);
            btn.classList.add("out-right");
        } else {
            btn.classList.remove(...allHoverClasser);
            btn.classList.add("out-left");
        }
    };

    return (
        <StyledButton
            onClick={onClick}
            onMouseEnter={handelMouseEnter}
            onMouseLeave={handelMouseLeave}
            ref={btnRef}
            type={type}
            isSmall={isSmall}
            withSvg={withBurger || withArrow}
        >
            {withBurger && <StyledBurger />}
            <Text text={text} spans={[]} type={isSmall ? TextType.buttonsSmall : TextType.buttons} withoutAnimation />
            {withArrow && <StyledArrow />}
        </StyledButton>
    );
};

export default Button;
