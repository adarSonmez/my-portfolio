import { useEffect, useState } from 'react'
import { client } from '../client'
import Skill from './Skill'

export interface ISkill {
  title: string
  description: string
  percent: number
  image: any
  color: string
  startDate: string
  category: 'frontend' | 'backend' | 'devops' | 'other'
}

function Skills() {
  const [skills, setSkills] = useState<ISkill[]>()

  useEffect(() => {
    const query = "*[_type == 'skills']"
    client
      .fetch(query)
      .then((data) => setSkills(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <section className="skills" id="skills">
      <h2>Skill Set</h2>

      <div className="front-end-skills">
        <h3>Front End</h3>
        {skills
          ?.filter((skill) => skill.category === 'frontend')
          .map((skill) => (
            <Skill key={skill.title} skill={skill} />
          ))}
      </div>

      <div className="back-end-skills">
        <h3>Back End</h3>
        {skills
          ?.filter((skill) => skill.category === 'backend')
          .map((skill) => (
            <Skill key={skill.title} skill={skill} />
          ))}
      </div>
    </section>
  )
}

export default Skills
