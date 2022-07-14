function Header() {
  const toggleNavBar = (e) => {
    const nav = e.target.parentNode.parentNode
    console.log(nav.className)
    if (nav.className === '') nav.className += ' responsive'
    else nav.className = ''
  }

  return (
    <header>
      <div className="left-header">My Portfolio</div>
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
