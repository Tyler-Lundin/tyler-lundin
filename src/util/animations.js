import { keyframes } from "styled-components";


export const slideOut = keyframes`
    from {
        right: -100%;
    }
    to {
        right: 0%;
    }
`
export const slideIn = keyframes`
    from {
        right: 0%;
    }
    to {
        right: -100%;
    }
`

export const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`
export const hideFirstAnimation = keyframes`
    0% {
        opacity: 0;
    }
    99% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

export const loadfromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-3%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }

`
export const loadfromTop = keyframes`
    from {
        opacity: 0;
        transform: translateY(-3%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }

`
export const loadfromRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(3%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }

`
export const loadfromBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(3%);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }

`

export const bounce = keyframes`
    from {
        transform: translateY(-8%);
    }
    to {
        transform: translateY(8%);
    }
`