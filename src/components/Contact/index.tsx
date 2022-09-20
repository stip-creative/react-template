import React, { FunctionComponent, useRef } from "react";
import { useSelector } from "react-redux";

import useLayoutEffect from "../../hooks/useIsomorphicLayoutEffect";
import Text from "../Text";
import TextType from "../../models/TextType";
import { RootState } from "../../store";
import { mainTitle, paragraph } from "../../animationConstants/Text";
import { IMapItem } from "../../models/IMapItem";
import MapBlock from "../Map";
import SocialNetworksType from "../../models/SocialNetworksType";

import {
    StyledBlock,
    StyledContactInst,
    StyledContactVk,
    StyledContactYouTube,
    StyledInfoBlock,
    StyledMapWrapper,
    StyledPhoneLink,
    StyledSocialMediaWrapper,
    StyledWrapper,
} from "./style";

export interface IContact {
    mapItems: IMapItem[];
    social_media: {
        type: SocialNetworksType;
        link: string;
    }[];
    title: string;
    phoneTitle: string;
    phoneNubers: {
        phone_number: string;
    }[];
    workingHours: string;
    workingHoursText: string;
    officeAddressTitle: string;
    officeAddress: string;
    emailTitle: string;
    email: string;
}

const Contact: FunctionComponent<IContact> = ({
    mapItems,
    social_media,
    title,
    phoneTitle,
    phoneNubers,
    workingHours,
    workingHoursText,
    officeAddressTitle,
    officeAddress,
    emailTitle,
    email,
}) => {
    const wrapperRef = useRef<HTMLElement>();
    const timeLine = useSelector((state: RootState) => state.animations.welcomeTimeLine);

    const socialIcons = {
        [SocialNetworksType.inst]: <StyledContactInst />,
        [SocialNetworksType.vk]: <StyledContactVk />,
        [SocialNetworksType.youtube]: <StyledContactYouTube />,
    };

    useLayoutEffect(() => {
        if (wrapperRef.current) {
            timeLine
                .from(
                    wrapperRef.current.querySelectorAll(".description h3 .parent"),
                    {
                        ...mainTitle.parent.vars,
                    },
                    1.8
                )
                .from(
                    wrapperRef.current.querySelectorAll(".description h3 .parent > span, .description h3 .parent > b"),
                    {
                        ...mainTitle.children.vars,
                    },
                    1.8
                )
                .from(
                    wrapperRef.current.querySelectorAll(".parahraph .children"),
                    {
                        ...paragraph.vars,
                    },
                    1.8
                );
        }
    }, [timeLine]);

    return (
        <StyledWrapper ref={wrapperRef}>
            <StyledBlock className="description">
                <Text text={title} type={TextType.h3} spans={[]} withoutAnimation />
                <StyledInfoBlock>
                    <Text text={phoneTitle} type={TextType.body} spans={[]} withoutAnimation />
                    {phoneNubers.map(item => (
                        <StyledPhoneLink key={item.phone_number} href={`tel:${item.phone_number}`}>
                            <Text text={item.phone_number} type={TextType.body} spans={[]} withoutAnimation />
                        </StyledPhoneLink>
                    ))}
                </StyledInfoBlock>
                <StyledInfoBlock>
                    <Text text={workingHours} type={TextType.body} spans={[]} withoutAnimation />
                    <Text text={workingHoursText} type={TextType.body} spans={[]} withoutAnimation />
                </StyledInfoBlock>
                <StyledInfoBlock>
                    <Text text={officeAddressTitle} type={TextType.body} spans={[]} withoutAnimation />
                    <Text text={officeAddress} type={TextType.body} spans={[]} withoutAnimation />
                </StyledInfoBlock>
                <StyledInfoBlock>
                    <Text text={emailTitle} type={TextType.body} spans={[]} withoutAnimation />
                    <Text text={email} type={TextType.body} spans={[]} withoutAnimation />
                </StyledInfoBlock>
            </StyledBlock>
            <StyledBlock>
                <StyledSocialMediaWrapper>
                    {social_media.map((item, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <a key={index} target="_blank" href={item.link} rel="noreferrer">
                            {socialIcons[item.type]}
                        </a>
                    ))}
                </StyledSocialMediaWrapper>
                <StyledMapWrapper>
                    <MapBlock mapItems={mapItems} />
                </StyledMapWrapper>
            </StyledBlock>
        </StyledWrapper>
    );
};

export default Contact;
