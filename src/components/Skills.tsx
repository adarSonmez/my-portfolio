import { MAIN_SKILLS, OTHER_SHILLS } from '../data/skills.data'
import Skill from './Skill'

function Skills() {
  const others = OTHER_SHILLS.map((skill) => {
    return (
      <img
        key={skill.name}
        src={skill.logo}
        alt={skill.name}
        style={skill.styles}
      />
    )
  })

  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      {MAIN_SKILLS.map((skill) => (
        <Skill skill={skill}       key={skill.name}
        />
      ))}
      <div className="other-tools">
        <h3 className="other-tools-header">
          Some of the other programming tools I'm comfortable with
        </h3>
        <div className="other-tools-logos">{others}</div>
      </div>
    </section>
  )
}

export default Skills
