import React from 'react'
import { RiExternalLinkLine } from 'react-icons/ri'
import './description.css'

function ProjectCard({ language, title, description, link }) {
  return (
    <div>
      <div className="card">
        <div className="codeLanguage"> {language} </div>
        <div className="projectTitle">{title}</div>
        <div className="projectDescription">{description}</div>
        <a className="link" href={link} target="_blank" rel="noreferrer">
          Github
          <RiExternalLinkLine className="externalLinkIcon" />
        </a>
      </div>
    </div>
  )
}

function Description() {
  const projectList = [
    {
      language: 'Flutter',
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
    {
      language: 'Flutter',
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
    {
      language: 'Flutter',
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
    <div className="projectList">
      {projectList.map((project) => (
        <ProjectCard
          language={project.language}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  )
}

export default Description
