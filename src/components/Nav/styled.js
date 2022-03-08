import styled from 'styled-components'

export const _Nav = {}

_Nav.Container = styled.div`
    
`
_Nav.OpenButton = styled.h1`
    font-family: 'le-havre';
    color: white;
    position: absolute;
    top: 0;
    right: 2%;
    z-index: 9;
`

export const _Links = {}

_Links.ul = styled.ul`
    list-style: none;
    display: grid;
    width: 50vw;
    grid-auto-flow: column;
`
_Links.li = styled.li`
    color: white;
    text-align: center;
    font-family: 'roboto-mono';
`