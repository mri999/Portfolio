import React from 'react'
import { CgExternal } from 'react-icons/cg'
import './description.css'

function ProjectCard({ language, title, description, link }) {
  return (
    <div>
      <a className="card" href={link} target="_blank" rel="noreferrer">
        <div className="codeLanguage"> {language} </div>
        <div className="projectTitle">{title}</div>
        <div className="projectDescription">{description}</div>
        <div className="link">
          Github
          <CgExternal className="externalLinkIcon" />
        </div>
      </a>
    </div>
  )
}

function Description() {
  const projectList = [
    {
      language: 'Flutter',
      title: 'Digi Wallet UI',
      description:
        'Designed a static UI of a digital wallet with multiple cards',
      link: 'https://github.com/mri999/Wallet-UI-Flutter-',
    },
    {
      language: 'Javascript',
      title: 'Digi Wallet UI',
      description: 'UI part of a digital wallet with multiple cards',
      link: 'https://github.com/mri999/Wallet-UI-Flutter-',
    },
    {
      language: 'Flutter',
      title: 'Digi Wallet UI',
      description: 'UI part of a digital wallet with multiple cards',
      link: 'https://github.com/mri999/Wallet-UI-Flutter-',
    },
  ]
  return (
    <div>
      <div id="projects" className="projectList">
        {projectList.map((project) => (
          <ProjectCard
            language={project.language}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
      <div id="education">
        
      </div>
    </div>
  )
}

export default Description
