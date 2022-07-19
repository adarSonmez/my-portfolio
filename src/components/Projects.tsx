import Project from './Project'
import { useEffect, useState } from 'react'
import { client } from '../client'

export interface IProjectData {
  title: string
  description: string
  image: any
  url?: string
  repo?: string
  finishedDate: string
  tags?: string[]
  published: boolean
}

function Projects() {
  const [projects, setProjects] = useState<IProjectData[]>([])

  useEffect(() => {
    const query = "*[_type == 'projects']"
    client
      .fetch(query)
      .then((data) => {
        // sort data by finishedDate
        const sortedData = (data as IProjectData[])
          .filter((p) => p.published)
          .sort((a, b) => {
            const aDate = new Date(a.finishedDate)
            const bDate = new Date(b.finishedDate)
            return bDate.getTime() - aDate.getTime()
          })

        setProjects(sortedData)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <section className="projects" id="projects">
      <h2>Some of My Projects</h2>

      {projects.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </section>
  )
}

export default Projects
