function Footer() {
  const myGithub = 'https://github.com/adarSonmez'
  const myTwitter = 'https://twitter.com/adarsonm3z'
  const myLinkedIn = 'https://www.linkedin.com/in/adar-sonmez/'
  const myEmail = 'adarsonmez@outlook.com'

  return (
    <footer>
      <p className="contact-message">
        If you like my work and have some cool project to work on, you can
        contact me through social sites listed below.
      </p>
      <div className="icons">
        <a
          href={myLinkedIn}
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a href={myGithub} target="_blank" rel="noreferrer" title="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a
          href={myTwitter}
          target="_blank"
          rel="noreferrer"
          title="Twitter"
        >
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
      <address>
        ©{new Date().getFullYear()}{' '}
        <a
          href="https://www.linkedin.com/in/adar-sonmez-0011110000110011"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          Adar SÖNMEZ.
        </a>{' '}
        All Rights Reserved.
      </address>
    </footer>
  )
}

export default Footer
