import { Link, useLocation, useNavigate, useHref } from "react-router-dom"
import { _Links } from "./styledNav"
import { HashLink } from "react-router-hash-link"


const NavLinks = (props) => {
  const {
    setIsNavOpen,
    handleClick,
    isNavOpen
  } = props

  return (
    <_Links.ul>
      <_Links.li onClick={handleClick}><Link to='/'>HOME</Link></_Links.li>
      <_Links.li onClick={handleClick}><HashLink to='/#Projects'>PROJECTS</HashLink></_Links.li>
      <_Links.li onClick={handleClick}><Link to='/aboutme'>ABOUT</Link></_Links.li>
      <_Links.li onClick={handleClick}><a href="mailto:tyler@tylerlundin.me">CONTACT</a></_Links.li>
    </_Links.ul>
  )
}

export default NavLinks


