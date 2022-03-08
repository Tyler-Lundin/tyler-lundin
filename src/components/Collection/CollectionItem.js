import React from 'react'
import styled from 'styled-components'

const width = '320px'
const height = '180px'
const CollectionItem = (props) => {
    const {
        image,
        link,
        title,
        desc
    } = props
  return (
    <S.Container>
        <S.Content image={image}>
            <S.Title>{title}</S.Title>
            <S.Hovered>
                <S.Desc>{desc}</S.Desc>
            </S.Hovered>
        </S.Content>
    </S.Container>
  )
}

export default CollectionItem

const S = {}
S.Desc = styled.p`
    color: white;
`
S.Title = styled.h4`
    color: black;
    background: rgba(255,255,255,1);
    text-align: center;
    position: relative;
    height: fit-content;
    align-self: flex-end;
    justify-self: center;
    margin: 0;
    width: ${width};
    border-radius: 0 0 10px 10px;
    transform: translateY(100%);
`
S.Hovered = styled.div`
    position:absolute;
    background: rgba(0,0,0,0.7);
    width: ${width};
    height: ${height};
    border-radius: 10px 10px 0 0;
    opacity: 0;
    :hover {
        opacity: 1;
    }
`
S.Content = styled.div`
    width: 100%;
    height: 100%;
    background: url(${props=>props.image});
    background-size: 100%;
    display: grid;
    border-radius: 10px 10px 0 0;
`
S.Container = styled.div`
    display: inline-block;
    width: ${width};
    height: ${height};
    margin: 0 15px;
    transition: 500ms;
    :hover {
        transform: scale(103%);
    }
`