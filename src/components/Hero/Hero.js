import React from 'react'
import HeroImage from './HeroImage'
import { _Hero } from './styled'
import Banner from './Banner'

const Hero = () => {
  return (
    <_Hero.Hero>
        <Banner 
          isDark={true} 
          bannerText={'DESIGNER'} 
          rotation='-90deg' 
          fontFamily={["le-havre", "arial", "paralucent", "roboto-slab"]}
        >
        
        </Banner>
        <_Hero.Heading>TYLER LUNDIN</_Hero.Heading>
        <HeroImage/>
        <Banner
          isDark={false}
          bannerText={'Developer'}
          rotation='90deg'
          fontFamily={["roboto-mono","roboto-mono","roboto-mono","roboto-mono",]}
        >
        
        </Banner>
    </_Hero.Hero>
  )
}

export default Hero
