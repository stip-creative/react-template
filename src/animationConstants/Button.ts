const Button = {
    vars: {
        opacity: 0,
        stagger: 0.1,
    },
    scrollTrigger: (trigger: HTMLElement) => ({
        start: "center center",
        trigger,
    }),
};

export default Button;
