import React, { useEffect } from 'react'
import Aos from 'aos'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'
import '../node_modules/aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <React.Fragment>
      <Home />
      <About/>
      <Skills />
      <Projects />
      {/*<Contact />*/}
      <Footer />
    </React.Fragment>
  )
}

export default App
