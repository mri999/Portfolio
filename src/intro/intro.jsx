import React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { RiExternalLinkLine } from 'react-icons/ri'
import './intro.css'

function SectionTag() {
  const sections = ['Projects', 'Education', 'Work Experience']

  return sections.map((section, index) => {
    return (
      <div className="sectionTag">
        0{index + 1}
        <div className="line"></div>
        {section}
      </div>
    )
  })
}

function Intro() {
  return (
    <div className="introSection">
      <div className="heading">Hello, I’m Mridul Kumar.</div>
      <div className="aboutMe">
        I’m a Software Developer working on building scalable enterprise
        solutions at{' '}
        <span>
          <a
            className="companyLink"
            href="https://www.procol.io/"
            target="_blank"
            rel="noreferrer"
          >
            Procol
          </a>
        </span>
        . My Front-End experices include working on React JS and Flutter.
      </div>
      <div className="sections">
        <SectionTag />
      </div>
      <div className="contact">
        <div className="contactMe">mridulbrt3@gmail.com </div>
        <a
          className="insta"
          href="https://www.instagram.com/mridulkumar__/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram className="icon" />
          Insta
          <RiExternalLinkLine className="externalLinkIcon" />
        </a>
        <a
          className="github"
          href="https://github.com/mri999"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icon" />
          Github
          <RiExternalLinkLine className="externalLinkIcon" />
        </a>
      </div>
    </div>
  )
}

export default Intro
