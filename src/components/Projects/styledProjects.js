import styled from 'styled-components'

export const S = {}

// PROJECTS
S.ProjectsContainer = styled.div`
    width: 100vw;
    height: fit-content;
    padding: 50px 0;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-gap: 3vh;
`

S.ProjectsHeader = styled.h2`
    font-family: 'le-havre';
    text-align: center;
`

// PROJECT
S.ProjectContainer = styled.div`
    width: fit-content;
    height: 70%;
    display: grid;
`

S.ProjectInformation = styled.div`
    width: 60vw;
    height: fit-content;
    padding: 2px;
    background: rgba(0,0,0,1);
    color: white;
    display: grid;
    grid-auto-flow: row;
    justify-content: space-around;
    align-items: center;
`

S.ProjectImage = styled.div`
    width: 60vw;
    height: 30vw;
    overflow-y: auto;
    img {
        width: 100%;
    }
`

S.ProjectLinks = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
    p {
        :hover {
        cursor: pointer;
        color: lightcoral;
        }
    }
`

