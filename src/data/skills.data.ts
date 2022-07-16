import htmlLogo from '../asserts/images/logos/html-logo.png'
import cssLogo from '../asserts/images/logos/css-logo.png'
import jsLogo from '../asserts/images/logos/js-logo.png'
import bootstrapLogo from '../asserts/images/logos/bootstrap-logo.png'
import gitLogo from '../asserts/images/logos/git-logo.png'
import javaLogo from '../asserts/images/logos/java-logo.png'
import mongoDBLogo from '../asserts/images/logos/mongodb-logo.png'
import nodeJSLogo from '../asserts/images/logos/nodejs-logo.png'
import postmanLogo from '../asserts/images/logos/postman-logo.png'
import reactLogo from '../asserts/images/logos/react-logo.png'
import sassLogo from '../asserts/images/logos/sass-logo.png'
import mySqlLogo from '../asserts/images/logos/mysql.jpg'
import reduxLogo from '../asserts/images/logos/redux-logo.png'
import mavenLogo from '../asserts/images/logos/maven.png'
import firebaseLogo from '../asserts/images/logos/firebase.png'
import graphQLLogo from '../asserts/images/logos/graphql.png'
import pwaLogo from '../asserts/images/logos/pwa.png'
import { getMonth } from '../utils/getMonth'

export interface IMainSkills {
  name: string
  logo: any
  details: string
  styles: object
}

export interface IOtherSkills {
  name: string
  logo: any
  styles: object
}

export const MAIN_SKILLS = [
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
      ${getMonth(new Date('May 15 2021'))} months ago. After learning
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
    details: `${getMonth(new Date('Oct 15 2020')) + ' '}
    months ago, I started taking JAVA course at my university. Now I am
    confident in OOP principles such as abstraction, encapsulation,
    inheritance, and polymorphism.`,
    styles: {},
  },
]

export const OTHER_SHILLS = [
  {
    name: 'MySQL',
    logo: mySqlLogo,
    styles: { padding: '.6vh' },
  },
  {
    name: 'Redux',
    logo: reduxLogo,
    styles: { padding: '.9vh' },
  },
  {
    name: 'GraphQL',
    logo: graphQLLogo,
    styles: { padding: '1.2vh' },
  },
  {
    name: 'PWA',
    logo: pwaLogo,
    styles: { padding: '1vh' },
  },
  {
    name: 'Firebase',
    logo: firebaseLogo,
    styles: { padding: '.5vh' },
  },
  {
    name: 'Git',
    logo: gitLogo,
    styles: { padding: '1.2vh' },
  },
  {
    name: 'Postman',
    logo: postmanLogo,
    styles: { padding: '.8vh' },
  },
  {
    name: 'Maven',
    logo: mavenLogo,
    styles: { padding: '.8vh' },
  },
]
