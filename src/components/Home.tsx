import { MouseEvent } from "react"
import Header from "./Header"
import ParticlesBG from "./particles/ParticlesBG"

function Home() {
  const myGithub = 'https://github.com/adarSonmez'
  const myTwitter = 'https://twitter.com/adarsonm3z'
  const myLinkedIn = 'https://www.linkedin.com/in/adar-sonmez-0011110000110011/'
  const myEmail = 'adarsonmez@outlook.com'

  const whoAreYou = (e: MouseEvent) => {
    const h2 = e.target as HTMLHeadingElement

    h2.innerText = '2A15J78'
    h2.classList.remove('fade')
    h2.classList.add('secret')
  }

  return (
    <section className="home">
      <Header />
      <ParticlesBG/>
      <h2 className="iam fade" onClick={(e) => whoAreYou(e)}>
        Hi, I'am Adar.
      </h2>
      <h2 className="its-great">It's great to see you.❤️</h2>

      <div className="icons">
        <a href={myLinkedIn} target="_blank" rel="noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href={myGithub} target="_blank" rel="noreferrer">
          <i className="bi bi-github"></i>
        </a>
        <a href={myTwitter} target="_blank" rel="noreferrer">
          <i className="bi bi-twitter"></i>
        </a>
        <a href={'mailto:' + myEmail} target="_blank" rel="noreferrer">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
    </section>
  )
}

export default Home
