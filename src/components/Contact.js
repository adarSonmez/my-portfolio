import React from 'react'

function Contact() {
  const myGithub = 'https://github.com/adarSonmez'
  const myTwitter = 'https://twitter.com/adarsonm3z'
  const myLinkedIn = 'https://www.linkedin.com/in/adar-sonmez-0011110000110011/'
  const myEmail = 'adarsonmez@outlook.com'

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>

      <form className="contact-form">
      <caption>If you like my work and you have a cool project to work on, you can contact me by filling out the form below.</caption>
        <input type="name" placeholder="name" />
        <input type="email" placeholder="email" />
        <textarea placeholder="content" />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Contact
