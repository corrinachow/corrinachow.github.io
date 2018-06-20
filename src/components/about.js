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

const languageList = languages.map(language => <li>{language}</li>)
const frameworksList = frameworks.map(framework => <li>{framework}</li>)
const systemsList = systems.map(system => <li>{system}</li>)
const designList = design.map(program => <li>{program}</li>)

const About = () => (
  <section id="about">
    <div class="subheader">
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
    <ul id="skill-4" style={{gridArea: "colfour"}}>
      <li>
        <span>Prototyping &amp; Design:</span>
      </li>
      {designList}
    </ul>
  </section>
)

export default About
