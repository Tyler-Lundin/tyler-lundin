import React from 'react'
import HeroImage from './HeroImage'
import { _Hero } from './styledHero'
import { AiOutlineArrowDown } from 'react-icons/ai'

const Hero = () => {
  window.addEventListener('scroll', hideArrow)

  function hideArrow () {
    var currentScrollPos = window.pageYOffset;
    if (350 < currentScrollPos) {
      document.getElementById("scrollDownIndicator").style.opacity = "0";
    } else if (350 > currentScrollPos && 280 < currentScrollPos) {
      document.getElementById("scrollDownIndicator").style.opacity = ".4";
    } else if (279 > currentScrollPos && 225 < currentScrollPos) {
      document.getElementById("scrollDownIndicator").style.opacity = ".8";
    } else if (224 > currentScrollPos) {
      document.getElementById("scrollDownIndicator").style.opacity = "1";
    }
  }
  const handleScroll = () => {
    var scrollto = document.getElementById("Projects");
    scrollto.scrollIntoView({behavior: "smooth" , block: 'start', inline: 'nearest'})
  }
  return (
    <_Hero.Hero>

        <HeroImage/>
        <_Hero.IntroContainer>
          <_Hero.IntroTitle>I'm Tyler Lundin</_Hero.IntroTitle>
          <_Hero.IntroContent>Self-taught Website Designer / Developer</_Hero.IntroContent>
          <_Hero.IntroContent>Designing with a passion and reason for ease of use</_Hero.IntroContent>
          <_Hero.IntroContent>Developing with performance and functionality in mind</_Hero.IntroContent>
          <_Hero.IntroContent>Reach out and we can discuss our future project</_Hero.IntroContent>
          <_Hero.IntroCTA>EMAIL ME</_Hero.IntroCTA>
        </_Hero.IntroContainer>
        <_Hero.ScrollDown onClick={handleScroll} id='scrollDownIndicator'>
          <AiOutlineArrowDown size='100%'/>
        </_Hero.ScrollDown>
    </_Hero.Hero>
  )
}

export default Hero
