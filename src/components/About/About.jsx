import React from 'react'
import styles from './About.module.scss'

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
  <section className={styles.about}>
    <div className={styles.subheader}>
      <h2>About me</h2>
    </div>
    <ul className={styles.skill1}>
      <li>
        <span>Languages:</span>
      </li>
      {languageList}
    </ul>
    <ul className={styles.skill2}>
      <li>
        <span>Libraries &amp; Frameworks:</span>
      </li>
      {frameworksList}
    </ul>
    <ul className={styles.skill3}>
      <li>
        <span>Systems &amp; Databases:</span>
      </li>
      {systemsList}
    </ul>
    <ul className={styles.skill4}>
      <li>
        <span>Prototyping &amp; Design:</span>
      </li>
      {designList}
    </ul>
    <div className={styles.aboutDescription}>
      <p>Hi, I'm a full stack developer &amp; designer based in Montreal.</p>
      <p>
        Currently: Software Engineer &#64; Plusgrade, <code>unavailable</code>{' '}
        for freelance, &amp; open to coffee/side projects involving{' '}
        <code>React.JS, Vue.JS, and Laravel</code>.
      </p>
      <p id="about-contact">
        <a href="#contact">Contact me</a>
      </p>
    </div>
  </section>
)

export default About
