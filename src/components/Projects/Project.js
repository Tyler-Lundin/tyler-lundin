import React from 'react'
import { S } from './styledProjects'
const Project = (props) => {
  return (
    <S.ProjectContainer>
        <S.ProjectInformation>
            <S.ProjectsHeader>{props.projectTitle}</S.ProjectsHeader>
            <S.ProjectLinks>
              <p onClick={()=>window.open(props.projectLink)}>View Live Site</p>
              <p onClick={()=>window.open(props.githubLink)}>View on Github</p>
            </S.ProjectLinks>
        </S.ProjectInformation>
        <S.ProjectImage>
            <img src={props.projectImage} loading='lazy' alt={props.projectTitle}/>
        </S.ProjectImage>
    </S.ProjectContainer>
  )
}

export default Project
