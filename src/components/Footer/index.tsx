import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";

import Text from "../Text";
import TextType from "../../models/TextType";
import Button from "../Button";
import ButtonType from "../../models/ButtonType";
import SocialNetworksType from "../../models/SocialNetworksType";
import { updateIsOpenSidebar } from "../../slices/homeSlice";

import {
    StyledInfoWrapper,
    StyledEmailLink,
    StyledAddresWrapper,
    StyledLogo,
    StyledQuarter,
    StyledWrapper,
    StyledTitleWrapper,
    StyledPhoneWrapper,
    StyledFooter,
    StyledPrivacyPolicy,
    StyledInst,
    StyledVk,
    StyledYouTube,
    StyledLink,
    StyledFooterFullViewWrapper,
    StyledPhoneLink,
} from "./style";

export interface IFooter {
    phones: {
        phone_number: string;
    }[];
    email: string;
    address: string;
    social_media: {
        type: SocialNetworksType;
        link: string;
    }[];
    privacyPolicyLink: string;
    publickOfferLink: string;
}

const Footer: FunctionComponent<IFooter> = ({ phones, email, address, social_media, privacyPolicyLink, publickOfferLink }) => {
    const dispatch = useDispatch();

    const socialIcons = {
        [SocialNetworksType.inst]: <StyledInst />,
        [SocialNetworksType.vk]: <StyledVk />,
        [SocialNetworksType.youtube]: <StyledYouTube />,
    };

    const onButtonClick = () => {
        dispatch(updateIsOpenSidebar(true));
    };

    const onSecondaryButtonClick = () => {
        const form = document.querySelector("#form .form-wrapper");

        if (form) {
            const bounds = form.getBoundingClientRect();

            window.scrollTo(0, bounds.top + window.scrollY);
        }
    };

    return (
        <StyledFooterFullViewWrapper>
            <StyledWrapper>
                <StyledLogo />
                <StyledInfoWrapper>
                    <StyledQuarter>
                        <StyledTitleWrapper>
                            <Text text="О центре" type={TextType.body} spans={[]} withoutAnimation />
                        </StyledTitleWrapper>
                        <StyledLink to="/">
                            <Text text="Главная" type={TextType.body} spans={[]} withoutAnimation />
                        </StyledLink>
                        <StyledLink to="/teachers">
                            <Text text="Преподаватели" type={TextType.body} spans={[]} withoutAnimation />
                        </StyledLink>
                        <StyledLink to="/results">
                            <Text text="Результаты учеников" type={TextType.body} spans={[]} withoutAnimation />
                        </StyledLink>
                        <StyledLink to="/contact">
                            <Text text="Контакты" type={TextType.body} spans={[]} withoutAnimation />
                        </StyledLink>
                    </StyledQuarter>
                    <StyledQuarter>
                        <StyledTitleWrapper>
                            <Text text="Контакты" type={TextType.body} spans={[]} withoutAnimation />
                            <StyledPhoneWrapper>
                                {phones.map(phone => (
                                    <StyledPhoneLink key={phone.phone_number} href={`tel:${phone.phone_number}`}>
                                        <Text text={phone.phone_number} type={TextType.body} spans={[]} withoutAnimation />
                                    </StyledPhoneLink>
                                ))}
                            </StyledPhoneWrapper>
                            <StyledEmailLink href={`mailto:${email}`}>
                                <Text text={email} type={TextType.body} spans={[]} withoutAnimation />
                            </StyledEmailLink>
                        </StyledTitleWrapper>
                    </StyledQuarter>
                    <StyledQuarter>
                        <StyledTitleWrapper>
                            <Text text="Центральный офис" type={TextType.body} spans={[]} withoutAnimation />
                            <StyledAddresWrapper>
                                <Text text={address} type={TextType.body} spans={[]} withoutAnimation />
                            </StyledAddresWrapper>
                        </StyledTitleWrapper>
                    </StyledQuarter>
                    <StyledQuarter>
                        <Button onClick={onButtonClick} text="Подобрать курс" type={ButtonType.primary} withoutAnimation />
                        <Button onClick={onSecondaryButtonClick} text="Получить консультацию" type={ButtonType.secondary} withoutAnimation />
                    </StyledQuarter>
                </StyledInfoWrapper>
                <StyledFooter>
                    <div className="half">
                        <Text text="© Учебный центр Сигма 2022" type={TextType.bodySmall} spans={[]} withoutAnimation />
                        <StyledPrivacyPolicy href={privacyPolicyLink} target="_blank">
                            <Text text="Политика конфиденциальности" type={TextType.bodySmall} spans={[]} withoutAnimation />
                        </StyledPrivacyPolicy>
                        <StyledPrivacyPolicy href={publickOfferLink} target="_blank">
                            <Text text="Договор публичной оферты" type={TextType.bodySmall} spans={[]} withoutAnimation />
                        </StyledPrivacyPolicy>
                    </div>
                    <div className="half">
                        {social_media.map((item, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <a key={index} target="_blank" href={item.link} rel="noreferrer">
                                {socialIcons[item.type]}
                            </a>
                        ))}
                    </div>
                </StyledFooter>
            </StyledWrapper>
        </StyledFooterFullViewWrapper>
    );
};

export default Footer;
