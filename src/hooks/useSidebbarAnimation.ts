import useLayoutEffect from "./useIsomorphicLayoutEffect";

const useSidebbarAnimation = (isOpenSidebar: boolean) => {
    useLayoutEffect(() => {
        const bg = document.getElementById("sidebar-bg");
        const wrapper = document.getElementById("wrapper-bg");

        if (isOpenSidebar) {
            bg.classList.add("show");
            wrapper.classList.add("show");
        } else {
            bg.classList.remove("show");
            wrapper.classList.remove("show");
        }
    }, [isOpenSidebar]);
};

export default useSidebbarAnimation;
