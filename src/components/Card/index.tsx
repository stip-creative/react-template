import React, { FunctionComponent } from "react";
import { useMediaQuery } from "react-responsive";

import { ICard } from "../../models/ICard";

import CardWithLink from "./CardWithLink";
import CardWithImage from "./CardWithImage";
import CardWithImageMobile from "./CardWithImage/Mobile";

const Card: FunctionComponent<ICard> = ({ widthLink = false, title, subTitle, uid, description, image }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

    if (widthLink) return <CardWithLink uid={uid} widthLink={widthLink} title={title} subTitle={subTitle} />;

    return isMobile ? (
        <CardWithImageMobile title={title} subTitle={subTitle} description={description} image={image} />
    ) : (
        <CardWithImage title={title} subTitle={subTitle} description={description} image={image} />
    );
};

export default Card;
