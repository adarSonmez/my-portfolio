import { MAIN_SKILLS, OTHER_SHILLS } from '../storage/skills.data'

function Skills() {
  const skills = MAIN_SKILLS.map((skill) => {
    return (
      <div key={skill.name} className="skill java-skill">
        <img src={skill.logo} alt={skill.name} style={skill.styles} />
        <p>{skill.details}</p>
      </div>
    )
  })

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
      {skills}
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
