import { MouseEvent } from 'react'

function Header() {
  const toggleNavBar = (e: MouseEvent) => {
    const element = e.target as HTMLDivElement
    const nav = element.parentNode?.parentNode! as HTMLElement
    if (nav.className === '') nav.className += ' responsive'
    else nav.className = ''
  }

  return (
    <header>
      <div className="left-header">Adar Sönmez</div>
      <nav>
        <div className="mobile-nav" onClick={(e) => toggleNavBar(e)}>
          <i className="bi bi-list"></i>
        </div>
        <div className="nav-menu-container">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
