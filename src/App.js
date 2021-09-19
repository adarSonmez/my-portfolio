import React from 'react'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default App
