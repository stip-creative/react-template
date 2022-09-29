import useLayoutEffect from "./useIsomorphicLayoutEffect";

const handleScrollAnimation = (parallaxElements: NodeListOf<Element>) => {
    parallaxElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        const coords = (elementTop / 2) * 0.2;

        el.style.transform = `translateY(${coords}px)`;
    });
};

const useParalax = () => {
    useLayoutEffect(() => {
        const parallaxElements = document.querySelectorAll(".parallax");

        const handler = () => {
            handleScrollAnimation(parallaxElements);
        };

        handleScrollAnimation(parallaxElements);

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, []);
};

export default useParalax;
