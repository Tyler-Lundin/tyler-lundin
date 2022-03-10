import React from 'react'
import styled from 'styled-components'
import img1 from './../../images/LundinOptometry/LundinOptometry01.jpg'
import img2 from './../../images/LundinOptometry/LundinOptometry02.jpg'
import img3 from './../../images/LundinOptometry/LundinOptometry03.jpg'
import img4 from './../../images/LundinOptometry/LundinOptometry04.jpg'

const ImageLibrary = () => {
  return (
    <S.ImageLibrary>
        <S.Image src={img1} />
    </S.ImageLibrary>
  )
}

export default ImageLibrary

const S = {}

S.ImageLibrary = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

S.Image = styled.img`

`
