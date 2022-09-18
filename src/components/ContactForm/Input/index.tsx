import React, { FunctionComponent, useRef } from "react";

import TextType from "../../../models/TextType";
import Text from "../../Text";

import { StyledInput, StyledLabel, StyledLine } from "./style";

export interface IContactFormInputProps {
    title: string;
    placeholder: string;
    name: string;
    value: string;
    isValid: boolean | null;
    onChange: (name: string, value: string) => void;
}

const Input: FunctionComponent<IContactFormInputProps> = ({ title, placeholder, name, value, isValid, onChange }) => {
    const labelRef = useRef<HTMLLabelElement>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onTextChange = (e: any) => {
        const newName = e.target.name;
        const newValue = e.target.value;

        onChange(newName, newValue);
    };

    return (
        <StyledLabel ref={labelRef} $isValid={isValid}>
            <Text text={title} type={TextType.bodySmall} spans={[]} withoutAnimation />
            <StyledInput $isValid={isValid} name={name} value={value} onChange={onTextChange} type="text" placeholder={placeholder} />
            <StyledLine />
            {isValid === false && <Text text="Введите корректные данные" type={TextType.bodySmall} spans={[]} withoutAnimation />}
        </StyledLabel>
    );
};

export default Input;
