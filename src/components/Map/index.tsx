import React, { FunctionComponent } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { useMediaQuery } from "react-responsive";

import PlacemarkIcon from "../../static/placemark.svg";
import { IMapItem } from "../../models/IMapItem";

export interface IMapBlockProps {
    mapItems: IMapItem[];
    onClick?: (addres: string) => void;
}

const MapBlock: FunctionComponent<IMapBlockProps> = ({ mapItems, onClick }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

    return (
        <YMaps>
            <Map className="y-map" defaultState={{ center: [53.902287, 27.561824], zoom: isMobile ? 11 : 12, behaviors: ["drag", "disable('scrollZoom')"] }}>
                {mapItems
                    .filter((item: IMapItem) => item.address !== null && item.coordinates !== null)
                    .map((item: IMapItem) => (
                        <Placemark
                            key={item.coordinates.latitude / item.coordinates.longitude}
                            properties={{
                                balloonContent: item.address[0].text,
                            }}
                            geometry={[item.coordinates.latitude, item.coordinates.longitude]}
                            options={{
                                iconLayout: "default#image",
                                iconImageHref: PlacemarkIcon,
                                iconImageSize: [48, 48],
                            }}
                            modules={["geoObject.addon.balloon"]}
                            onClick={e => {
                                const addres = e.get("target").properties.get("balloonContent");

                                if (addres && onClick) {
                                    onClick(addres);
                                }
                            }}
                        />
                    ))}
                <ZoomControl />
            </Map>
        </YMaps>
    );
};

export default MapBlock;
