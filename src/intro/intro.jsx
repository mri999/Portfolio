import React from 'react'
import { Link } from 'react-scroll'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import './intro.css'
import me from '../assets/me-modified.png'

function SectionTag() {
  const sections = [
    { name: 'Projects', id: 'projects' },
    { name: 'Work Experience', id: 'education' },
  ]

  return sections.map((section, index) => {
    return (
      <Link activeClass="active" spy={true} smooth={true} to={section.id}>
        <div className="sectionTag">
          0{index + 1}
          <div className="line"></div>
          {section.name}
        </div>
      </Link>
    )
  })
}

function Intro() {
  return (
    <div className="introSection">
      <div className="heading">Hello, I’m Mridul Kumar.</div>
      <div className="aboutMe">
        I’m a Software Engineer working on building scalable enterprise
        solutions at{'  '}
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
        . My Front-End experiences include working on React JS and Flutter.
      </div>
      <div className="sections">
        <SectionTag />
      </div>
      <div className="contact">
        <img src={me} alt="mridulkumar" height="60" width="60" />
        <a
          href="https://drive.google.com/uc?id=1roF28H5o0_q99aRMjJwa_6FpYrFHkBSe&export=download"
          target="_blank"
          rel="noreferrer"
          download="mridulKumar.pdf"
        >
          <button className="resume">
            <span className="resumeText"> Resume ↓ </span>
          </button>
        </a>
        <a
          className="insta"
          href="https://www.linkedin.com/in/mridul-kumar-410402181/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="icon" />
          LinkedIn
        </a>
        <a
          className="github"
          href="https://github.com/mri999"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="icon" />
          Github
        </a>
      </div>
    </div>
  )
}

export default Intro
