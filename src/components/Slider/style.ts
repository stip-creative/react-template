import styled from "styled-components";
import Slider from "react-slick";

import { ReactComponent as Arrow } from "../../static/arrow.svg";
import colors from "../../styles/variables";

export const StyledSlider = styled(Slider)`
    .slick-slider {
        position: relative;
    }
`;

export const StyledArrow = styled(Arrow)`
    transition: stroke 0.3s cubic-bezier(0.25, 0.25, 0, 1);
    will-change: stroke;
`;

export const StyledSliderArrowRight = styled.div`
    width: 3.4rem;
    height: 3.4rem;
    border: 1px solid ${colors.blue};
    border-radius: 50%;
    position: absolute;
    right: 4.09rem;
    left: auto;
    top: -1.9rem;
    transform: translate(0%, -100%);

    display: flex !important;
    align-content: center;
    justify-content: center;
    align-items: center;

    transition: border 0.3s cubic-bezier(0.25, 0.25, 0, 1), opacity 0.3s cubic-bezier(0.25, 0.25, 0, 1);
    will-change: stroke;

    &:before {
        content: "";
    }

    &.slick-disabled {
        border: 1px solid ${colors.lightGrey};
        opacity: 0.95;

        ${StyledArrow} {
            path {
                stroke: ${colors.lightGrey};
            }
        }
    }

    @media (max-width: 640px) {
        width: 2.7rem;
        height: 2.7rem;

        right: auto;
        left: 3.94rem;

        top: 2.7rem;
    }
`;

export const StyledSliderArrowLeft = styled(StyledSliderArrowRight)`
    right: 7.95rem;

    ${StyledArrow} {
        transform: rotateY(180deg);
    }

    @media (max-width: 640px) {
        z-index: 1;
        right: auto;
        left: 0.88rem;
    }
`;
