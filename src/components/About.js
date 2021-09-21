import React from 'react'
import itsMe from '../asserts/images/leon.jpg'

function About(props) {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="its-me" data-aos="fade-right">
        <img src={itsMe} alt="Adar Sönmez" />
      </div>
      <div className="about-content" data-aos="fade-left">
        <p>
          Adar Sönmez was born in 2000 in the World. He loves programming,
          reading and daydreaming. His favorite website is
          <a
            href="https://en.wikipedia.org/wiki/Main_Page"
            target="_blank"
            rel="noreferrer"
          >
            {' '}
            Wikipedia
          </a>
          . His favorite band is<span className="pink"> Pink Floyd.</span>
        </p>
        <p>
          Adar is currently studying Computer Engineering at Eskişehir Technical
          University. Besides, he is the Avionics Manager of{' '}
          <a
            href="https://www.linkedin.com/company/arcturus-rocket-team/"
            target="_blank"
            rel="noreferrer"
          >
            Arcturus Rocket Team.{' '}
          </a>
          But his real passion is Web Programming. He has zero years of
          experience as a web developer in any company.
        </p>
        <p>
          He is specialized in HTML/CSS and JavaScript on the frontend, but He
          is pretty comfortable with ReactJS, NodeJS and MongoDB.
        </p>
      </div>
    </section>
  )
}

export default About
