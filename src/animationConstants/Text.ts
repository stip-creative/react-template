export const mainTitle = {
    parent: {
        vars: {
            duration: 0.5,
            y: "-100%",
            stagger: 0.05,
        },
        scrollTrigger: (trigger: HTMLElement) => ({
            start: "center bottom",
            trigger,
        }),
    },
    children: {
        vars: {
            duration: 0.5,
            opacity: 0,
            y: "140%",
            stagger: 0.05,
        },
        scrollTrigger: (trigger: HTMLElement) => ({
            start: "center bottom",
            trigger,
        }),
    },
};

export const paragraph = {
    vars: {
        y: "100%",
        stagger: 0.01,
        duration: 0.3,
        delay: 0,
    },
    scrollTrigger: (trigger: HTMLElement) => ({
        start: "center bottom",
        trigger,
    }),
};
