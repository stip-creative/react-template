import React, { FunctionComponent, useEffect, useState } from "react";
import gsap from "gsap";

import { IMapItemWithSchedule } from "../../../models/IMapItem";
import { ISelectItem } from "../../../models/ISelectItem";
import TextType from "../../../models/TextType";
import SelectMenu from "../../Sidebar/Select";
import Text from "../../Text";
import MapBlock from "../index";

import { StyledWrapper, StyledMapWrapper, StyledOfficeWrapper, StyledContentWrapper, StyledOfficeSchedule, StyledOfficeScheduleWrapper, StyledOfficeScheduleList } from "./style";

export interface ICourseMapProps {
    title: string;
    mapItems: IMapItemWithSchedule[];
}

const CourseMap: FunctionComponent<ICourseMapProps> = ({ mapItems, title }) => {
    const selectOptions = mapItems.map(option => ({
        label: option.address[0].text,
        value: option.address[0].text,
    }));
    const [selectedValue, setSelectedValue] = useState(selectOptions[0]);

    useEffect(() => {
        gsap.to(".unselected", {
            opacity: 0,
        });
        gsap.to(".selected", {
            opacity: 1,
        });
    }, [selectedValue]);

    const onChange = (name: string, value: ISelectItem) => {
        setSelectedValue(value);
    };

    const onPlacemarkClick = (addres: string) => {
        setSelectedValue({
            label: addres,
            value: addres,
        });
    };

    return (
        <StyledWrapper>
            <Text text={title} spans={[]} type={TextType.h3} withoutAnimation />
            <StyledContentWrapper>
                <StyledMapWrapper>
                    <MapBlock mapItems={mapItems} onClick={onPlacemarkClick} />
                </StyledMapWrapper>
                <StyledOfficeWrapper>
                    <Text text="Расписание занятий" type={TextType.h4} spans={[]} withoutAnimation />
                    <SelectMenu title="филиал" onChange={onChange} isDisabled={false} selectOptions={selectOptions} placeholder="" defaultValue={selectedValue} />
                    <StyledOfficeScheduleList>
                        {mapItems.map((item, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <StyledOfficeScheduleWrapper className={item.address[0].text === selectedValue.value ? "selected" : "unselected"} key={index}>
                                {item.office_schedule.week.map(day => (
                                    <StyledOfficeSchedule key={day.day_of_week}>
                                        <Text text={day.day_of_week} type={TextType.bodyLarge} spans={[]} withoutAnimation />
                                        <Text text={day.time[0].text} type={TextType.body} spans={[]} withoutAnimation />
                                    </StyledOfficeSchedule>
                                ))}
                            </StyledOfficeScheduleWrapper>
                        ))}
                    </StyledOfficeScheduleList>
                </StyledOfficeWrapper>
            </StyledContentWrapper>
        </StyledWrapper>
    );
};

export default CourseMap;
