import itsMe from '../asserts/images/adarsonmez.jpg'

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="its-me">
        <img src={itsMe} alt="Adar Sönmez" />
      </div>
      <div className="about-content">
        <p>
          Adar Sönmez was born in 2000 in the World. His job is to turn complex
          problems into a simple and beautiful designs. He loves programming,
          reading and dreaming. His favorite website is
          <a
            href="https://en.wikipedia.org/wiki/Main_Page"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#00BF16' }}
          >
            {' '}
            Wikipedia
          </a>
          . His favorite band is
          <a
            href="https://open.spotify.com/artist/36QJpDe2go2KgaRleHCDTp"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#FF8800' }}
          >
            {' '}
            Led Zeppelin.
          </a>
        </p>
        <p>
          Adar is currently studying Computer Engineering at
          <a
            href="https://eskisehir.edu.tr/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#FF0F13' }}
          >
            {' '}
            Eskişehir Technical University.{' '}
          </a>
          He is a very curious person, so he is never satisfied with what is
          told to him at school. That's why he always does research and tries to
          go deeper.
        </p>
        <p>
          He is specialized in HTML/CSS/JS and{' '}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#00B2D0' }}
          >
            {' '}
            ReactJS
          </a>{' '}
          on the frontend, but He is pretty comfortable with Node.js and
          Databases. He has zero years of experience as a web developer in any
          company.
        </p>
      </div>
    </section>
  )
}

export default About
