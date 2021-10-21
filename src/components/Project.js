import React from 'react'

function Project(props) {
  return (
    <div className="project" style={{ backgroundImage: `url(${props.bg})` }}>
      <div className="project-info">
        <h3 className="project-name">{props.name}</h3>
        <p className="project-description">{props.des}</p>
        <a href={props.code} target="_blank" rel="noreferrer"><button className="open-repo">Open Repository </button></a>
        <a href={props.visit} target="_blank" rel="noreferrer"><button className="visit-website">Visit Website</button></a>
      </div>
    </div>
  )
}

export default Project
