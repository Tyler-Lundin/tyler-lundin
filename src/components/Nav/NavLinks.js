import { _Links } from "./styled"


const NavLinks = (props) => {
  const {
    setIsNavOpen,
    isNavOpen
  } = props
  const handleClick = () => {
    setIsNavOpen(!isNavOpen)
  }
  return (
    <_Links.ul>
      <_Links.li onClick={handleClick}><a href='#Projects'>PROJECTS</a></_Links.li>
      <_Links.li onClick={handleClick}>ABOUT</_Links.li>
      <_Links.li onClick={handleClick}>CONTACT</_Links.li>
    </_Links.ul>
  )
}

export default NavLinks


