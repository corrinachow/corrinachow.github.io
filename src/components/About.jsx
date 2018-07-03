import React from 'react'
import Link from 'gatsby-link'

const languages = ['JavaScript', 'HTML5 & CSS3', 'Ruby', 'R']
const frameworks = [
  'Node.JS',
  'React.JS',
  'jQuery',
  'SASS/SCSS',
  'Bootstrap 4',
  'Mocha & Chai',
  'Ruby on Rails',
  'RSpec',
]
const systems = ['Git', 'SQL', 'MongoDB', 'PostgreSQL']
const design = ['Photoshop', 'Illustrator', 'InDesign', 'Sketch']

const createList = skills => {
  return skills.map(skill => <li>{skill}</li>)
}

const languageList = createList(languages)
const frameworksList = createList(frameworks)
const systemsList = createList(systems)
const designList = createList(design)

const About = () => (
  <section id="about">
    <div className="subheader" style={{ gridArea: 'aboutTitle' }}>
      <h2>About me</h2>
    </div>
    <ul id="skill-1">
      <li>
        <span>Languages:</span>
      </li>
      {languageList}
    </ul>
    <ul id="skill-2">
      <li>
        <span>Libraries &amp; Frameworks:</span>
      </li>
      {frameworksList}
    </ul>
    <ul id="skill-3">
      <li>
        <span>Systems &amp; Databases:</span>
      </li>
      {systemsList}
    </ul>
    <ul id="skill-4" style={{ gridArea: 'colfour' }}>
      <li>
        <span>Prototyping &amp; Design:</span>
      </li>
      {designList}
    </ul>
    <div
      className="about-description"
      style={{ gridArea: 'desc', color: '#333' }}
    >
      <p>
        Hi, I'm a full stack developer &amp; designer based in Montreal. I'm
        currently available for small freelance projects!
      </p>
      <p id="about-contact">
        <a href="#contact">Contact me</a>
      </p>
    </div>
  </section>
)

export default About
