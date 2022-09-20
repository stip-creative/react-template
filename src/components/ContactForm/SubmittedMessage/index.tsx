import React, { FunctionComponent, useRef } from "react";
import gsap from "gsap";

import useLayoutEffect from "../../../hooks/useIsomorphicLayoutEffect";
import TextType from "../../../models/TextType";
import Text from "../../Text";

import StyledWrapper from "./style";

const SubmittedMessage: FunctionComponent = () => {
    const wrapperRef = useRef<HTMLElement>();

    useLayoutEffect(() => {
        gsap.from(wrapperRef.current, {
            opacity: 0,
        });
    });

    return (
        <StyledWrapper ref={wrapperRef}>
            <Text text="Спасибо за заявку!" type={TextType.h3} spans={[]} withoutAnimation />
            <Text text="Наш менеджер свяжется с вами в ближашее время." type={TextType.body} spans={[]} withoutAnimation />
        </StyledWrapper>
    );
};

export default SubmittedMessage;
