import React, {lazy, Suspense} from 'react'
// import Project from './Project'
import { S } from './styledProjects'
import lundinOptometry from './../../images/home/LundinOptometryDisplay.webp'
import JournalDisplay from './../../images/home/JournalDisplay.webp'
const Project = lazy(()=>import('./Project'))
const Projects = () => {
  return (
    <S.ProjectsContainer id='Projects'>
        <Suspense fallback={<h1>LOADING</h1>}>
            <Project 
                projectTitle={'LundinOptometry'}
                projectLink={'https://www.lundinoptometry.com'}
                githubLink={'https://github.com/Tyler-Lundin/lundin-optometry'}
                projectImage={lundinOptometry}
            />
        </Suspense>
        <Suspense fallback={<h1>LOADING</h1>}>
            <Project 
                projectTitle={'Journal'}
                projectLink={'https://jrnl-7e606.web.app/'}
                githubLink={'https://github.com/Tyler-Lundin/journal'}
                projectImage={JournalDisplay}
            />
        </Suspense>
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