import { _Hero } from "./styled"


const Banner = (props) => {
  const {
    isDark,
    rotation,
    bannerText,
    fontFamily
  } = props
  const fonts = [] 
  let set = true
  {fontFamily&&set&&fontFamily.map(font=>{
    fonts.push(font)
  })}
  set = false 


  return (
    <_Hero.Banner isDark={props.isDark}>
        <_Hero.BannerTextContainer rotation={props.rotation}>
          <_Hero.BannerText fontFamily={fonts[0]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[1]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[2]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[3]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[4]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[0]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[1]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[2]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[3]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[4]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[0]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[1]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[2]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[3]}>{props.bannerText}</_Hero.BannerText>
          <_Hero.BannerText fontFamily={fonts[4]}>{props.bannerText}</_Hero.BannerText>
        </_Hero.BannerTextContainer>
    </_Hero.Banner>
  )
}

export default Banner