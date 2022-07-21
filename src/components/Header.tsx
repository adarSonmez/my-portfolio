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
      <h1 className="left-header">Adar Sönmez</h1>
      <nav>
        <div className="mobile-nav" onClick={(e) => toggleNavBar(e)}>
          <i className="bi bi-list"></i>
        </div>
        <div className="nav-menu-container">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a
            target={'_blank'}
            rel={'noreferrer'}
            href="https://1drv.ms/b/s!AiFbFkMJ-362i13ziAWYDO9kf3KL"
            title="Open resume in new tab"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header
