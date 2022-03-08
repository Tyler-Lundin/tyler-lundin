import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero/Hero'
import Nav from '../components/Nav/Nav'

const Home = () => {
  return (
    <S.Home>
        <Nav/>
        <Hero/>
    </S.Home>
  )
}

export default Home


const S = {}

S.Home = styled.div`
    width: 100vw;
    height: 100vh;
    iframe {
      position: absolute;
      top: 0;
    }
`