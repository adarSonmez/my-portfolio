import React from 'react'

function Header() {
  return (
    <header>
      <div className="left-header">My Portfolio</div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
          <li className="drop-down">
            <i class="bi bi-list"></i>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
