import Project from './Project'
import PROJECTS_DATA from '../storage/projects.data'

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Some of My Projects</h2>

      {PROJECTS_DATA.map((project) => (
        <Project
          key={project.name}
          name={project.name}
          des={project.des}
          bg={project.bg}
          code={project.code}
          visit={project.visit}
        />
      ))}
    </section>
  )
}

export default Projects
