import styled from 'styled-components'

export const _Nav = {}

_Nav.Container = styled.div`
    width: 100vw;
    height: 12vh;
    background: rgba(0,0,0,0.7);
    position: absolute;
    bottom: 0;
    display: grid;
    align-items: center;
    justify-content: center;
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