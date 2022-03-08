import styled from 'styled-components'
import Color from '../../util/Colors'

export const _Hero = {}

_Hero.Hero = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`
_Hero.Heading = styled.h1`
    position: absolute;
    top: -1%;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    font-family: 'paralucent';
    text-shadow: 0px -7px 5px rgba(0,0,0,0.5);
`

_Hero.HeroImage = styled.img`
    height: 100%;
    margin: 0 -2em;
    position: relative;
    z-index: 0;
`


_Hero.Banner = styled.div`
    background: ${props=> props.isDark ? Color.TransparentBlack : Color.TransparentWhite};
    width: 80px;
    height: 100vh;
    color: ${props=> props.isDark ? 'white' : 'black'};
    position: relative;
    z-index: 1;
    box-shadow: 0px 0px 5px 0px ${props=> !props.isDark ? Color.TransparentBlack : Color.TransparentWhite};
`
_Hero.BannerTextContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    transform: rotate(${props=>props.rotation}) translateX(${props=>props.rotation == '-90deg' ? '-100vh' : '-150px'});
    position: relative ;
    grid-gap: 1rem;
`
_Hero.BannerText = styled.h1`
    font-size: 3rem;
    font-family: ${props=>props.fontFamily};
`