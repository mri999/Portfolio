import React from 'react'
import { AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'
import { RiExternalLinkLine } from 'react-icons/ri'
import './intro.css'

function SectionTag() {
  const sections = ['PROJECTS', 'TALKS', 'INTERVIEWS']

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
        I’m a Software Developer working on Front-End Experiences at{' '}
        <span>
          <a
            className="link"
            href="https://www.procol.io/"
            target="_blank"
            rel="noreferrer"
          >
            Procol
          </a>
        </span>
        . I can't shut up about test-driven development and utility-first CSS. I
        also host the Developer Experience podcast, and share what I learn on my
        blog frontstuff.io, or at meetups and conferences.
      </div>
      <div className="sections">
        <SectionTag />
      </div>
      <div className="contact">
        <div className="contactMe">Contact me </div>
        <a
          className="insta"
          href="https://www.instagram.com/"
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
