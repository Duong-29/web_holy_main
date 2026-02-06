export const pageRotate = {
    initial: {
        opacity: 0,
        rotate: -4,
        scale: 0.98,
    },
    animate: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
            duration: 0.45,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        rotate: 4,
        scale: 0.98,
        transition: {
            duration: 0.25,
            ease: "easeIn",
        },
    },
};
