import Header from './Header'
import ParticlesBG from './ParticlesBG'

function Home() {
  const myGithub = 'https://github.com/adarSonmez'
  const myTwitter = 'https://twitter.com/adarsonm3z'
  const myLinkedIn = 'https://www.linkedin.com/in/adar-sonmez-0011110000110011/'
  const myEmail = 'adarsonmez@outlook.com'

  return (
    <section className="home">
      <Header />
      <ParticlesBG />
      <div className="greet">
        <p className="iam">Hi, I'am Adar.</p>
        <p className="its-great">It's great to see you.❤️</p>
      </div>

      <div className="icons">
        <a href={myLinkedIn} target="_blank" rel="noreferrer" title="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href={myGithub} target="_blank" rel="noreferrer" title="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a href={myTwitter} target="_blank" rel="noreferrer" title="Twitter">
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href={'mailto:' + myEmail}
          target="_blank"
          rel="noreferrer"
          title="Mail me!"
        >
          <i className="bi bi-envelope"></i>
        </a>
      </div>
      <div className="swipe-icon-container">
        <i className="bi bi-arrow-down"></i>
      </div>
    </section>
  )
}

export default Home
