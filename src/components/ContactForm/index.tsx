import React, { FormEvent, FunctionComponent, useMemo, useRef, useState } from "react";
import gsap from "gsap";

import ButtonType from "../../models/ButtonType";
import IFormDate from "../../models/IFormDate";
import { IImage } from "../../models/IImage";
import { IText } from "../../models/IText";
import TextType from "../../models/TextType";
import Button from "../Button";
import { StyledImg } from "../Facts/Fact/style";
import Text from "../Text";

import { Checkbox } from "./Checkbox";
import Input from "./Input";
import { StyledForm, StyledFormFigure, StyledFormWrapper, StyledWrapper } from "./style";
import SubmittedMessage from "./SubmittedMessage";

export interface IContactForm {
    title: IText;
    image: IImage;
    privacyPolicyLink: string;
}

interface ITimersObject {
    name: NodeJS.Timeout;
    phone: NodeJS.Timeout;
    checkbox: NodeJS.Timeout;
}

const ContactForm: FunctionComponent<IContactForm> = ({ title, image, privacyPolicyLink }) => {
    const wrapperRef = useRef<HTMLElement>();

    const [formDate, setFormDate] = useState<IFormDate>({
        name: "",
        phone: "",
    });
    const [submitted, setSubmitted] = useState<boolean>(false);

    const [nameIsValid, setNameIsValid] = useState<boolean | null>(null);
    const [phoneIsValid, setPhoneIsValid] = useState<boolean | null>(null);
    const [checkboxIsValid, setCheckboxIsValid] = useState<boolean | null>(true);
    const [isCheckedCheckbox, setIsCheckedCheckbox] = useState(true);

    const nameTimerRef = useRef<NodeJS.Timeout>(null);
    const phoneTimerRef = useRef<NodeJS.Timeout>(null);
    const checkboxTimerRef = useRef<NodeJS.Timeout>(null);
    const timers: ITimersObject = {
        name: nameTimerRef.current,
        phone: phoneTimerRef.current,
        checkbox: checkboxTimerRef.current,
    };

    const isValidForm = useMemo(() => (nameIsValid && phoneIsValid && checkboxIsValid) || false, [nameIsValid, phoneIsValid, checkboxIsValid]);

    const clearValidateField = (name: string) => {
        switch (name) {
            case "name":
                setNameIsValid(null);
                break;
            case "phone":
                setPhoneIsValid(null);
                break;
            default:
                break;
        }
    };

    const onChangeChackbox = () => {
        setCheckboxIsValid(true);
        setIsCheckedCheckbox(!isCheckedCheckbox);
    };

    const validateField = (name: string, value: string) => {
        if (value.length === 0) return clearValidateField(name);
        switch (name) {
            case "name":
                setNameIsValid(value.length > 2);
                break;
            case "phone":
                setPhoneIsValid(/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/.test(value));
                break;
            default:
                break;
        }

        return null;
    };

    const changeFormDate = (name: string, value: string) => {
        setFormDate({ ...formDate, [name]: value });
        let timer = timers[name];

        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            validateField(name, value);
        }, 500);
    };

    const validateAllField = () => {
        setNameIsValid(formDate.name.length > 2);
        setPhoneIsValid(/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/.test(formDate.phone));
        setCheckboxIsValid(isCheckedCheckbox);
    };

    const createToken = async () => {
        const response = await fetch(process.env.ALFA_CRM_LOGIN_LINK, {
            method: "POST",
            body: JSON.stringify({
                email: process.env.ALFA_CRM_USER_EMAIL,
                api_key: process.env.ALFA_CRM_USER_API_KEY,
            }),
        });

        if (response.ok) {
            const result = await response.json();

            return result.token;
        }

        return null;
    };

    const createLead = async () => {
        const token = await createToken();

        const response = await fetch(process.env.ALFA_CRM_CREATE_LINK, {
            method: "POST",
            headers: {
                "X-ALFACRM-TOKEN": token,
            },
            body: JSON.stringify({
                legal_type: 1,
                name: formDate.name,
                is_study: 0,
                phone: [formDate.phone],
                branch_ids: 1,
            }),
        });

        return response.ok;
    };

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        validateAllField();
        if (!isValidForm) return false;

        gsap.to(wrapperRef.current, {
            opacity: 0,
            onComplete: () => setSubmitted(true),
        });

        try {
            await createLead();
            await ym(89963732, "reachGoal", "zayavka");
        } catch (err) {
            console.error(err);
        }

        return false;
    };

    return (
        <StyledWrapper id="form">
            <StyledFormFigure>
                <StyledImg className="paralax test" src={image.url} alt={image.alt} />
            </StyledFormFigure>
            {!submitted && (
                <StyledFormWrapper className="form-wrapper" ref={wrapperRef}>
                    <Text text={title.text} type={TextType.h3} spans={[]} withoutAnimation />
                    <StyledForm onSubmit={onSubmit}>
                        <Input title="Ваше имя" placeholder="Введите имя" name="name" value={formDate.name} onChange={changeFormDate} isValid={nameIsValid} />
                        <Input title="Телефон" placeholder="+375 (__) ___-__-__" name="phone" value={formDate.phone} onChange={changeFormDate} isValid={phoneIsValid} />
                        <Checkbox privacyPolicyLink={privacyPolicyLink} isChecked={isCheckedCheckbox} onChange={onChangeChackbox} isValid={checkboxIsValid} />
                        <Button text="Получить консультацию" type={ButtonType.primary} withoutAnimation />
                    </StyledForm>
                </StyledFormWrapper>
            )}
            {submitted && <SubmittedMessage />}
        </StyledWrapper>
    );
};

export default ContactForm;
