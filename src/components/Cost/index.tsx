import React, { FunctionComponent } from "react";

import TextType from "../../models/TextType";
import Text from "../Text";

import { StyledBlock, StyledBlueTile, StyledLine, StyledTile, StyledTileHalf, StyledTitleWrapper, StyledWrapper } from "./style";

export interface ICost {
    title: string;
    slogan: string;
    price: string;
    priceSubtitle: string;
    discount: string;
    discountSubtitle: string;
}

const Cost: FunctionComponent<ICost> = ({ title, slogan, price, priceSubtitle, discount, discountSubtitle }) => {
    return (
        <StyledWrapper>
            <StyledTitleWrapper>
                <Text text={title} type={TextType.h3} spans={[]} />
            </StyledTitleWrapper>
            <StyledBlock>
                <StyledBlueTile>
                    <Text text={slogan} type={TextType.h3} spans={[]} />
                </StyledBlueTile>
                <StyledTile>
                    <StyledTileHalf>
                        <Text text={price} type={TextType.h3} spans={[]} />
                        <Text text={priceSubtitle} type={TextType.bodyLarge} spans={[]} />
                    </StyledTileHalf>
                    <StyledLine />
                    <StyledTileHalf>
                        <Text text={discount} type={TextType.h3} spans={[]} />
                        <Text text={discountSubtitle} type={TextType.bodyLarge} spans={[]} />
                    </StyledTileHalf>
                </StyledTile>
            </StyledBlock>
        </StyledWrapper>
    );
};

export default Cost;
