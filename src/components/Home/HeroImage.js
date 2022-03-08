import BlackWhiteImage from './../../images/751w1080h.png'
import styled from 'styled-components'
const HeroImage = () => {
    return (
        <S.HeroImage src={BlackWhiteImage} alt='Image of Tyler Lundin holding glasses in one hand'/>
    )
}

export default HeroImage

const S = {}
S.HeroImage = styled.img`
    height: 100%;
`
