import { IMainSkills } from '../data/skills.data'
import { motion } from 'framer-motion'

function Skill({ skill }: { skill: IMainSkills }) {
  return (
    <motion.div
      className="skill java-skill"
      initial={{ y: '100px', opacity: 0 }}
      transition={{ duration: .7 }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <img src={skill.logo} alt={skill.name} style={skill.styles} />
      <p>{skill.details}</p>
    </motion.div>
  )
}

export default Skill
