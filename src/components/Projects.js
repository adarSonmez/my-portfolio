import React from 'react'
import Project from './Project'
import bubblesBG from '../asserts/images/projects/bubbles.jpg'
import flappyBG from '../asserts/images/projects/flappy.png'
import pianonaBG from '../asserts/images/projects/pianona.png'
import weatherBG from '../asserts/images/projects/weather.png'
import calculatorBG from '../asserts/images/projects/calculator.png'
import shiningStarsBG from '../asserts/images/projects/shining-stars.png'



function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Some of My Projects</h2>

      {projects.map((project) => (
        <Project
          name={project.name}
          des={project.des}
          bg={project.bg}
          code={project.code}
          visit={project.visit}
        />
      ))}
    </section>
  )
}

const projects = [
  {
    name: 'Weather App',
    des: 'Cool weather app, made using HTML5, CSS3 and Vanilla JavaScript.',
    bg: weatherBG,
    code: 'https://github.com/adarSonmez/weather-app',
    visit: 'https://adarsonmez.github.io/weather-app/',
  },
  {
    name: 'Flappy Bird',
    des: 'Remember this annoying game that once occupied the trends on the play store? Yes, I made a copy of that game.',
    bg: flappyBG,
    code: 'https://github.com/adarSonmez/flappy-bird',
    visit: 'http://flappy-bird.epizy.com/',
  },
  {
    name: 'Pianona',
    des: 'Play piano on the web',
    bg: pianonaBG,
    code: 'https://github.com/adarSonmez/pianona',
    visit: 'https://adarsonmez.github.io/pianona/',
  },
  {
    name: 'Realistic Calculator',
    des: 'How would you like to experience this realistic classic calculator on the web?',
    bg: calculatorBG,
    code: 'https://github.com/adarSonmez/vanilla-js-caculator',
    visit: 'https://adarsonmez.github.io/vanilla-js-caculator/',
  },
  {
    name: 'Shining Stars',
    des: 'This is one of my first JavaScript projects. As I said before, "firsts are special to me"',
    bg: shiningStarsBG,
    code: 'https://github.com/adarSonmez/shining-stars',
    visit: 'https://adarsonmez.github.io/shining-stars/',
  },
  {
    name: '999 Luftballons',
    des: 'A relaxing website with colorful balloons and a cool mouse effect.',
    bg: bubblesBG,
    code: 'https://github.com/adarSonmez/999-luftballons',
    visit: 'https://adarsonmez.github.io/999-luftballons/',
  },
]

export default Projects
