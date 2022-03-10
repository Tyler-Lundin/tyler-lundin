import React from 'react'
import Project from './Project'
import { S } from './styledProjects'
import lundinOptometry from './../../images/lundinoptometry.png'
import JournalDisplay from './../../images/JournalDisplayLarge.jpg'
const Projects = () => {
  return (
    <S.ProjectsContainer id='Projects'>
        <Project 
            projectTitle={'LundinOptometry'}
            projectLink={'https://www.lundinoptometry.com'}
            githubLink={'https://github.com/Tyler-Lundin/lundin-optometry'}
            projectImage={lundinOptometry}
        />
        <Project 
            projectTitle={'Journal'}
            projectLink={'https://jrnl-7e606.web.app/'}
            githubLink={'https://github.com/Tyler-Lundin/journal'}
            projectImage={JournalDisplay}
        />
        {/* <Project 
            projectTitle={'Journal'}
            projectLink={'https://jrnl-7e606.web.app/'}
            githubLink={'https://github.com/Tyler-Lundin/journal'}
            projectImage={JournalDisplay}
        />
        <Project 
            projectTitle={'Journal'}
            projectLink={'https://jrnl-7e606.web.app/'}
            githubLink={'https://github.com/Tyler-Lundin/journal'}
            projectImage={JournalDisplay}
        /> */}
    </S.ProjectsContainer>
  )
}

export default Projects