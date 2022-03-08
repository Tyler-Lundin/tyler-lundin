import styled from 'styled-components'
import React from 'react'
import HeroImage from './HeroImage'



const Hero = () => {
  return (
    <S.Hero>
        <HeroImage/>
    </S.Hero>
  )
}

export default Hero

const S = {}

S.Hero = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`