import React from 'react'
import htmlLogo from '../asserts/images/html-logo.png'
import cssLogo from '../asserts/images/css-logo.png'
import jsLogo from '../asserts/images/js-logo.png'
import bootstrapLogo from '../asserts/images/bootstrap-logo.png'
import gitLogo from '../asserts/images/git-logo.png'
import gitHubLogo from '../asserts/images/github-logo.png'
import javaLogo from '../asserts/images/java-logo.png'
import jqueryLogo from '../asserts/images/jquery-logo.png'
import mongoDBLogo from '../asserts/images/mongodb-logo.png'
import npmLogo from '../asserts/images/npm-logo.png'
import nodeJSLogo from '../asserts/images/nodejs-logo.png'
import postmanLogo from '../asserts/images/postman-logo.png'
import reactLogo from '../asserts/images/react-logo.png'
import sassLogo from '../asserts/images/sass-logo.png'
import yarnLogo from '../asserts/images/yarn-logo.png'

function Skills() {
  const skills = skillList.map((skill) => {
    return (
      <div className="skill java-skill" data-aos="fade-up">
        <img src={skill.logo} alt={skill.name} style={skill.styles} />
        <p>{skill.details}</p>
      </div>
    )
  })

  const others = otherSkills.map((skill) => {
    return <img src={skill.logo} alt={skill.name} style={skill.styles} />
  })

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      {skills}
      <div className="other-tools">
        <h3 className="other-tools-header">
          Some of the other programming tools I'm comfortable with
        </h3>
        <div className="other-tools-logos">{others}</div>
      </div>
    </section>
  )
}

const calculateMonth = (startDate) => {
  const now = new Date()
  const differenceMilis = now - startDate
  const month = differenceMilis * 3.80517e-10
  return Math.round(month)
}

const skillList = [
  {
    name: 'HTML',
    logo: htmlLogo,
    details: `In 2016, I met web programming with HTML. Although it is easy, it is a
    very special language for me. Because firsts are always special.`,
    styles: {},
  },
  {
    name: 'CSS',
    logo: cssLogo,
    details: `Great! I could create web pages with HTML. But wait a minute, these
    pages don't look good at all. Shortly after I met HTML, I started to
    create more stylish web pages thanks to CSS.`,
    styles: { padding: '0.8vh 1.65vh' },
  },
  {
    name: 'JavaScript',
    logo: jsLogo,
    details: `I wrote my first JavaScript program in 2017, and that's when I felt like
    I was really programming. JavaScript is my favorite programming
    language.`,
    styles: { padding: '1.3vh' },
  },
  {
    name: 'Bootstrap',
    logo: bootstrapLogo,
    details: `Well, I don't like Bootstrap because it doesn't give me the freedom I
      want in styling. I only use it in some of my projects where
      functionality is more important than styling.`,
    styles: { padding: '.9vh' },
  },
  {
    name: 'Sass',
    logo: sassLogo,
    details: `Even though I'm fairly new to Sass, I'm a huge fan of it. It makes my
      code much cleaner and functional. I'm considering gradually switching
      to Sass instead of CSS.`,
    styles: { padding: '.6vh' },
  },
  {
    name: 'ReactJS',
    logo: reactLogo,
    details: `This website was made by me using React JS. I like modern things more
      than traditional ones that's why I constantly read the ReactJS
      documentation and try to be up to date.`,
    styles: {},
  },
  {
    name: 'NodeJS',
    logo: nodeJSLogo,
    details: `      I started server-side programming with NodeJS
      ${calculateMonth(new Date('May 15 2021'))} months ago. After learning
      NodeJS, I became more convinced of the idea that one language could
      rule them all.`,
    styles: { padding: '.7vh' },
  },
  {
    name: 'MongoDB',
    logo: mongoDBLogo,
    details: `I prefer to use non-relational databases in my projects due to their
      flexibility and high performance. MongoDB is a great invention that
      that gives me all I want from a database.`,
    styles: {},
  },
  {
    name: 'JAVA',
    logo: javaLogo,
    details: `${calculateMonth(new Date('Oct 15 2020')) + ' '}
    months ago, I started taking JAVA course at my university. Now I am
    confident in OOP principles such as abstraction, encapsulation,
    inheritance, and polymorphism.`,
    styles: {},
  },
]

const otherSkills = [
  {
    name: 'git',
    logo: gitLogo,
    styles: { padding: '1vh' },
  },
  {
    name: 'GitHub',
    logo: gitHubLogo,
    styles: { padding: '1vh' },
  },
  {
    name: 'jQuery',
    logo: jqueryLogo,
    styles: {},
  },
  {
    name: 'npm',
    logo: npmLogo,
    styles: { padding: '.9vh' },
  },
  {
    name: 'yarn',
    logo: yarnLogo,
    styles: { padding: '.9vh' },
  },

  {
    name: 'Postman',
    logo: postmanLogo,
    styles: { padding: '.7vh' },
  },
]

export default Skills
