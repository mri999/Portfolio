import React from 'react'
import { CgExternal } from 'react-icons/cg'
import FadeIn from 'react-fade-in'
import './description.css'

function ProjectCard({ language, title, description, link, live }) {
  return (
    <div>
      <a className="card" href={link} target="_blank" rel="noreferrer">
        <div className="codeLanguage"> {language} </div>
        <div className="projectTitle">{title}</div>
        <div className="projectDescription">{description}</div>
        <div className="bottomLinks">
          <a className="link" href={link} target="_blank" rel="noreferrer">
            Github
            <CgExternal className="externalLinkIcon" />
          </a>
          {live && (
            <a className="link" href={live} target="_blank" rel="noreferrer">
              Live at
              <CgExternal className="externalLinkIcon" />
            </a>
          )}
        </div>
      </a>
    </div>
  )
}

function SectionCard({ work, time, company }) {
  return (
    <div className="sectionCard">
      <div className="company"> {company}</div>
      <div className="work"> {work}</div>
      <div className="time"> {time}</div>
    </div>
  )
}

function Description() {
  const projectList = [
    {
      language: 'React JS',
      title: 'Crypto Market',
      description: 'Get latest insights about crypto coins. Used CoinGecko api',
      link: 'https://github.com/mri999/CryptoMarket',
      live: 'https://mk-crypto-market.netlify.app/',
    },
    {
      language: 'Flutter',
      title: 'Google Clone',
      description: 'Google Clone',
      link: 'https://github.com/mri999/Flutter-Google-Clone',
      live: 'https://mk-google-clone.netlify.app/#/',
    },
    {
      language: 'Flutter',
      title: 'Calculator UI',
      description: 'Neumorphism static calculator UI',
      link: 'https://github.com/mri999/Neumorphism-Calculator-UI',
    },
    {
      language: 'Flutter',
      title: 'Digi Wallet UI',
      description:
        'Designed a static UI of a digital wallet with multiple cards',
      link: 'https://github.com/mri999/Wallet-UI-Flutter-',
    },
  ]
  return (
    <div>
      <div id="projects" className="projectList">
        {projectList.map((project) => (
          <FadeIn delay={300} transitionDuration={1000}>
            <ProjectCard
              language={project.language}
              title={project.title}
              description={project.description}
              link={project.link}
              live={project.live}
            />
          </FadeIn>
        ))}
      </div>
      <div id="education" className="educationList">
        <div className="leftSectionCard">
          <SectionCard
            work="Technical Content Writer"
            company="GeeksForGeeks"
            time="May-July 2020"
          />
          <SectionCard
            work="Technical Content Writer"
            company="CodingNinjas"
            time="Jun-Nov 2020"
          />
        </div>
        <div className="rightSectionCard">
          <SectionCard
            work="Software Developer"
            company="Procol"
            time="Feb 2021- present"
          />
        </div>
      </div>
    </div>
  )
}

export default Description
