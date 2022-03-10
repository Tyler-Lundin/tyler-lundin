import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero/Hero'
import Projects from '../components/Projects/Projects'

const Home = () => {
  return (
    <S.Home>
      <Hero/>
      <Projects/>
    </S.Home>
  )
}

export default Home


const S = {}

S.Home = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`