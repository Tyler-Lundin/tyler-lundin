import NavLinks from "./NavLinks"
import { _Nav } from "./styled"
import {useState} from 'react'
import {AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import useIsMounted from './../../util/useIsMounted'
const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(true)
  const isMounted = useIsMounted()
  const handleClick = () => {
    setIsNavOpen(!isNavOpen)
    console.log(isNavOpen)
    if (isNavOpen == true) {
      document.getElementById("nav_top_container").style.top = "-50px";
    } else {
      document.getElementById("nav_top_container").style.top = "0";
    }
  }

  var prevScrollpos = window.pageYOffset;
  window.addEventListener('scroll', scrollHideNav) 
  function scrollHideNav () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav_top_container").style.top = "0";
    } else {
      document.getElementById("nav_top_container").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }
  //   return (<div className={`navigation ${isMounted ? 'mounted' : ''}`}></div>)
  // }

  return (
    <>
      <_Nav.Container id="nav_container">
        <_Nav.TopContainer id='nav_top_container'>
        <_Nav.OpenButton id="nav_open_button" onClick={handleClick}>menu</_Nav.OpenButton>
          <_Nav.IconLinks>
            <AiFillGithub onClick={()=>window.open('https://github.com/Tyler-Lundin')} size='35px'/>
            <AiFillLinkedin onClick={()=>window.open('https://www.linkedin.com/in/tyler-lundin')} size='35px'/>
          </_Nav.IconLinks>
          <_Nav.Heading>tylerlundin.me</_Nav.Heading>

        </_Nav.TopContainer>
      </_Nav.Container>
      <_Nav.MenuContainer>
        <_Nav.Menu isNavOpen={isNavOpen} isMounted={isMounted}>
          <_Nav.OpenButton id="nav_open_button" onClick={handleClick}>menu</_Nav.OpenButton>
          <NavLinks setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen}/>
        </_Nav.Menu>
      </_Nav.MenuContainer>
    </>
  )
}

export default Nav
