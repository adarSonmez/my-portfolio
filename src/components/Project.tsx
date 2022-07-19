import { motion } from 'framer-motion'
import { getImageUrl } from '../client'
import { IProjectData } from './Projects'

function Project({ project }: { project: IProjectData }) {
  const { title, description, image, url, repo } = project

  return (
    <motion.div
      className="project"
      style={{ backgroundImage: `url(${getImageUrl(image)})` }}
      initial={{ scale: .1, opacity: 0 }}
      transition={{ duration: 0.1, ease: 'linear' }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      <div className="project-info">
        <i className="bi bi-arrow-bar-up"></i>
        <h3 className="project-name">{title}</h3>
        <p className="project-description">{description}</p>
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            <button className="visit-website">Visit Website</button>
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noreferrer">
            <button className="open-repo">Open Repository </button>
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default Project
