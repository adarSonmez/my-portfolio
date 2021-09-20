import React from 'react'
import Header from './Header'

function Home(props) {
  const whoAreYou = (e) => {
    e.target.innerText = 'I develop software'
    e.target.classList.remove('fade')
    e.target.classList.add('what-do-you-do')
  }

  return (
    <section className="home">
      <Header />
      <h2 className="iam fade" onClick={(e) => whoAreYou(e)}>
        Hi, I'am Adar.
      </h2>
      <h2 className="hello">It's great to see you.❤️</h2>

      <div className="icons">
        <i className="bi bi-linkedin"></i>
        <i className="bi bi-github"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-envelope"></i>
      </div>
    </section>
  )
}

export default Home
