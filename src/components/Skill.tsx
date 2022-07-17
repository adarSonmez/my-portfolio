import { motion } from 'framer-motion'
import { getImageUrl } from '../client'
import { ISkill } from './Skills'

function Skill({ skill }: { skill: ISkill }) {
  const { title, percent, image, color } = skill

  const maxWidth = percent.toString() + '%'

  return (
    <div className="skill-bar">
      <motion.div
        style={{ backgroundColor: color }}
        className="skill-color"
        initial={{ width: 0 }}
        whileInView={{
          width: maxWidth,
          transition: {
            duration: 1.2,
            ease: 'easeInOut',
          },
        }}
      >
        <span className="skill-name">
          <img
            className="skill-img"
            src={getImageUrl(image) as any}
            alt={title}
          />
        </span>
        <span className="skill-percent ">{percent}%</span>
      </motion.div>
    </div>
  )
}

export default Skill
