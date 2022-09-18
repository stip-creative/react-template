import React, { ChangeEvent, FunctionComponent } from "react";

import { StyledCheckbox, StyledCheckmarkWrapper, StyledLink } from "./style";

export interface IContactFormCheckboxProps {
    isChecked: boolean;
    isValid: boolean | null;
    onChange: () => void;
    privacyPolicyLink: string;
}

export const Checkbox: FunctionComponent<IContactFormCheckboxProps> = ({ isChecked, isValid, onChange, privacyPolicyLink }) => {
    const toggleCheck = (e: ChangeEvent<Event>) => {
        e.stopPropagation();
        onChange();
    };

    return (
        <StyledCheckbox isValid={isValid} onMouseDown={toggleCheck}>
            <input type="checkbox" checked={isChecked} onChange={() => {}} id="checkbox" />
            <label>
                <StyledCheckmarkWrapper isValid={isValid} />
                <span>
                    Даю согласие на обработку{" "}
                    <StyledLink href={privacyPolicyLink} target="_blank">
                        персональных данных
                    </StyledLink>
                </span>
            </label>
        </StyledCheckbox>
    );
};
