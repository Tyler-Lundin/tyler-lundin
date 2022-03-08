import React from 'react'
import styled from 'styled-components'
import CollectionItem from './CollectionItem'
import Vaporwave from './../../images/Vaporwave.png'

const Collection = () => {
  return (
    <S.Container className='disable-scrollbars'>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
        <CollectionItem image={Vaporwave} title='VaporWave' linkTo={'#'} desc='Vaporwave image desc'/>
    </S.Container>
  )
}

export default Collection

const S = {}

S.Container = styled.div`
    width: 100vw;
    height: 210px;
    background: rgb(50,50,50);
    align-items: center;
    padding: 1%;
    overflow-x: auto;
    white-space: nowrap;
`