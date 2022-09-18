const lerp = (min: number, max: number, t: number) => {
    return (1 - t) * min + t * max;
};

export default lerp;
