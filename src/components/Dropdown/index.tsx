import React, { FunctionComponent, useRef } from "react";

import { IDropdown } from "../../models/IDropdown";
import Text from "../Text";
import TextType from "../../models/TextType";

import Element from "./Element";
import { StyledTitleWrapper, StyledWrapper } from "./style";
import { StyledLine } from "./Element/style";

export interface IDropdownProps {
    data: IDropdown;
}

const Dropdown: FunctionComponent<IDropdownProps> = ({ data }) => {
    const wrapperRef = useRef();

    return (
        <StyledWrapper ref={wrapperRef}>
            <StyledTitleWrapper>
                <Text text={data.title.text} spans={[]} type={TextType.h3} withoutAnimation />
            </StyledTitleWrapper>
            <StyledLine />
            {data.elements.map((element, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Element key={index} title={element.title} text={element.text} />
            ))}
        </StyledWrapper>
    );
};

export default Dropdown;
