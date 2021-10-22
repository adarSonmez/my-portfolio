import React from 'react'

function Footer() {
  const myGithub = 'https://github.com/adarSonmez'
  const myTwitter = 'https://twitter.com/adarsonm3z'
  const myLinkedIn = 'https://www.linkedin.com/in/adar-sonmez-0011110000110011/'
  const myEmail = 'adarsonmez@outlook.com'

  return (
    <footer>
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

      <address>
        ©{new Date().getFullYear()} ADAR SÖNMEZ. All Rights Reserved.
        <p className="developer">
          Developed by{' '}
          <a
            href="https://www.linkedin.com/in/adar-sonmez-0011110000110011"
            target="_blank"
            rel="noreferrer"
          >
            Adar SÖNMEZ
          </a>
        </p>
      </address>
    </footer>
  )
}

export default Footer
