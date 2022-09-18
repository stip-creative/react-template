const colors = {
    black: "#0C0C22",
    blue: "#1E74F8",
    blueHovered: "#1A43D3",
    white: "#FFFFFF",
    lightGrey: "#D7DFEA",
    lightBlue: "#FBFCFF",
    grey: "#CDD4DF",
    red: "#D75050",
    light: "#FBFBFF",
};

const cs = 13.7;
const dw = 1600;

const csMobiel = 10;
const dwMobiel = 360;

export const setFontSize = (fontSize: number) => `calc((${fontSize} / ((${dw} / 100) * ${cs})) * ${cs}vw)`;
export const setMobileFontSize = (fontSize: number) => `calc((${fontSize} / ((${dwMobiel} / 100) * ${csMobiel})) * ${csMobiel}vw)`;
export const allScrollClasser = ["scroll-up", "scroll-down"];

export default colors;
