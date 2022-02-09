import React from 'react';
import Header from './Header';

function Home() {
  const myGithub = 'https://github.com/adarSonmez';
  const myTwitter = 'https://twitter.com/adarsonm3z';
  const myLinkedIn =
    'https://www.linkedin.com/in/adar-sonmez-0011110000110011/';
  const myEmail = 'adarsonmez@outlook.com';

  const whoAreYou = (e) => {
    e.target.innerText = '2A15J78';
    e.target.classList.remove('fade');
    e.target.classList.add('secret');
  };

  return (
    <section className="home">
      <Header />
      <h2 className="iam fade" onClick={(e) => whoAreYou(e)}>
        Hi, I'am Adar.
      </h2>
      <h2 className="its-great">It's great to see you.❤️</h2>

      <div className="icons" data-aos="fade-up">
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
  );
}

export default Home;
