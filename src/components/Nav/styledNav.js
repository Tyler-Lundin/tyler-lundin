import styled from 'styled-components'
import Color from '../../util/Colors'
import { slideIn, slideOut, hideFirstAnimation } from '../../util/animations'

export const _Nav = {}

_Nav.Container = styled.div`
    width: 100vw;
    height: 50px;
    position: fixed;
    z-index: 1;
`
_Nav.MenuContainer = styled.div`
    animation: ${hideFirstAnimation} 1s forwards;
    position: fixed;
    right: -100%;
    background: rgba(0,0,0,0.9);
    z-index: 20;
    width: 100vw;
    height: 100%;
`
_Nav.Menu = styled.div`
    position: fixed;
    right: -100%;
    background: rgba(0,0,0,0.9);
    z-index: 20;
    width: 100vw;
    height: 100%;
    display: grid;
    justify-content: center;
    animation: ${props => (props.isNavOpen ? slideIn : slideOut)} 500ms forwards;

    
`
_Nav.TopContainer = styled.div`
    width: 100%;
    height: 50px;
    background: rgba(205,0,80,0.4);
    position: absolute;
    transition: 250ms;
    display: grid;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px black;
`
_Nav.Heading = styled.h1`
    color: white;
    font-family: 'le-havre';
    white-space: nowrap;
    font-size: 2rem;
    a {
        all: unset;
        :hover {
            color: lightcoral;
            cursor: pointer;
        }
    }
`
_Nav.OpenButton = styled.h1`
    font-family: 'le-havre';
    color: white;
    position: absolute;
    top: 0;
    right: 2%;
    z-index: 21;
    cursor: pointer;
    margin: 0;
    :hover {
            color: lightcoral;
    }
`
_Nav.IconLinks = styled.div`
    display: flex;
    position: fixed;
    color: white;
    margin: 0 15px;
    svg {
        :hover {
            color: lightcoral;
        }
    }
`

export const _Links = {}

_Links.ul = styled.ul`
    list-style: none;
    display: grid;
    height: 90vh;
    width: 50vw;
    align-items: center;
    justify-items:center ;
`
_Links.li = styled.li`
    color: white;
    text-align: center;
    font-family: 'roboto-mono';
    font-size: 3rem;
    width: fit-content;
    height: fit-content;
    text-align: center;
    transition: 250ms;
    border: 1px solid rgba(0,0,0,0);
    :hover {
        cursor: pointer;
        border: 1px solid white;
    }
    a{
        all: unset;
        text-decoration: none !important;
    }
`

_Links.a = styled.a`
    all: unset;
    text-decoration: none !important;
`