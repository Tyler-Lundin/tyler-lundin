import styled from 'styled-components'
import { bounce, loadfromLeft, loadfromTop } from '../../util/animations'
export const _Hero = {}

_Hero.Hero = styled.div`
width: 100%;
height: 100vh;
display: grid;
justify-items: center;
align-items: center;

animation: ${loadfromTop} 400ms forwards ease-in-out;
    @media (max-width: 768px) { 
        grid-template-rows: 1fr 1fr;
        

    }
    @media (min-width: 769px) { /* laptop */
        grid-template-columns: 1fr 1fr;
    }
`
_Hero.ScrollDown = styled.div`
    width: 5vh;
    height: 5vh;
    position: absolute;
    bottom: 3%;
    color: lightcoral;
    animation: ${bounce} 1s ease-in-out infinite alternate-reverse;
`

_Hero.HeroImage = styled.img`
    margin: 0 -2em;
    position: relative;
    z-index: 0;
    @media (max-width: 768px) { 
        height: 40vh;
        align-self: end;
    }
    @media (min-width: 769px){ /* laptop */
        height: 65vh;

    }
    
`
_Hero.IntroContainer = styled.div`
    width: fit-content;
    height: 80%;
    display: grid;
    align-content: center;
    gap: 10px;
    color: white;
    @media (max-width: 768px) { 
        justify-items: center;
        align-self: start ;
    }

`
_Hero.IntroTitle = styled.h1`
    font-family: 'roboto-slab';

`

_Hero.IntroContent = styled.p`
    font-family: 'arial';
`
_Hero.IntroCTA = styled.button`
    all: unset;
    background: rgba(205,0,80,0.4);
    color: white;
    font-size: 1.5rem;
    font-family: 'roboto-mono';

    :hover {
        background: lightcoral;
    }
`