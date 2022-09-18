import React, { FunctionComponent } from "react";

import { IMapItem } from "../../../models/IMapItem";
import TextType from "../../../models/TextType";
import Text from "../../Text";
import MapBlock from "../index";

import StyledWrapper from "./style";

export interface IMapProps {
    title: string;
    mapItems: IMapItem[];
}

const HomeMap: FunctionComponent<IMapProps> = ({ mapItems, title }) => {
    return (
        <StyledWrapper>
            <Text text={title} spans={[]} type={TextType.h3} withoutAnimation />
            <div>
                <MapBlock mapItems={mapItems} />
            </div>
        </StyledWrapper>
    );
};

export default HomeMap;
