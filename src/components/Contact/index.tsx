import React, { FunctionComponent, useRef } from "react";

import Text from "../Text";
import TextType from "../../models/TextType";
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

    const socialIcons = {
        [SocialNetworksType.inst]: <StyledContactInst />,
        [SocialNetworksType.vk]: <StyledContactVk />,
        [SocialNetworksType.youtube]: <StyledContactYouTube />,
    };

    return (
        <StyledWrapper ref={wrapperRef}>
            <StyledBlock className="description">
                <Text text={title} type={TextType.h3} spans={[]} />
                <StyledInfoBlock>
                    <Text text={phoneTitle} type={TextType.body} spans={[]} />
                    {phoneNubers.map(item => (
                        <StyledPhoneLink key={item.phone_number} href={`tel:${item.phone_number}`}>
                            <Text text={item.phone_number} type={TextType.body} spans={[]} />
                        </StyledPhoneLink>
                    ))}
                </StyledInfoBlock>
                <StyledInfoBlock>
                    <Text text={workingHours} type={TextType.body} spans={[]} />
                    <Text text={workingHoursText} type={TextType.body} spans={[]} />
                </StyledInfoBlock>
                <StyledInfoBlock>
                    <Text text={officeAddressTitle} type={TextType.body} spans={[]} />
                    <Text text={officeAddress} type={TextType.body} spans={[]} />
                </StyledInfoBlock>
                <StyledInfoBlock>
                    <Text text={emailTitle} type={TextType.body} spans={[]} />
                    <Text text={email} type={TextType.body} spans={[]} />
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
