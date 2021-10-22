import React from 'react'

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade">
      <h2>Contact</h2>

      <form className="contact-form">
        <caption>
          If you like my work and you have some cool project to work on, you can
          contact me by filling out the form below or through my social media
          accounts listed in the footer.
        </caption>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
        <input type="text" placeholder="subject" />
        <textarea placeholder="text" />
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}

export default Contact
