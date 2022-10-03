import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import Select from "react-select";
import gsap from "gsap";

import { ISelectItem } from "../../../models/ISelectItem";
import TextType from "../../../models/TextType";
import Text from "../../Text";

import StyledSelectLabel from "./style";

export interface IContactFormSelectProps {
    title: string;
    onChange: (name: string, value: ISelectItem) => void;
    selectOptions: ISelectItem[];
    placeholder: string;
    isDisabled: boolean;
    defaultValue?: ISelectItem;
    isTopPlacement?: boolean;
}

const SelectMenu: FunctionComponent<IContactFormSelectProps> = ({ title, placeholder, onChange, selectOptions, isDisabled, defaultValue, isTopPlacement }) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
    const wrapperRef = useRef();
    const [, setValue] = useState<ISelectItem>(defaultValue);

    useEffect(() => {
        if (isDisabled) {
            setValue(null);

            gsap.to(wrapperRef.current, {
                opacity: 0,
                pointerEvents: "none",
                display: "none",
            });
        } else {
            gsap.to(wrapperRef.current, {
                opacity: 1,
                pointerEvents: "auto",
                display: "block",
            });
        }
    }, [isDisabled]);

    const onMenuToggle = async () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const onMenuClose = async () => {
        setMenuIsOpen(false);
    };

    const onChangeSelect = (newValue: ISelectItem) => {
        setValue(newValue);
        onChange("selectors", newValue);
    };

    return (
        <StyledSelectLabel ref={wrapperRef}>
            <Text text={title} type={TextType.bodyXSmall} spans={[]} withoutAnimation />
            <Select
                name="selectors"
                className="multi-select"
                classNamePrefix="select"
                options={selectOptions}
                defaultValue={defaultValue}
                isDisabled={isDisabled}
                menuIsOpen={menuIsOpen}
                onMenuOpen={onMenuToggle}
                onMenuClose={onMenuClose}
                onChange={onChangeSelect}
                placeholder={placeholder}
                value={defaultValue}
                menuPlacement={isTopPlacement ? "top" : "bottom"}
                isSearchable={false}
            />
        </StyledSelectLabel>
    );
};

export default SelectMenu;
