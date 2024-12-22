import "./styles/skills.scss";
import { frontend, backend, tools } from "../assets/SkillList";

const Skills = () => {
  return (
    <section id="skills">
      <section>
        <h2>Front-end</h2>
        <div>
          {frontend && frontend.map(skill => {
            return <span key={skill.name} style={{ "background": skill.color }}>{<skill.icon />}{skill.name}</span>
          })}
        </div>
      </section>
      <section>
        <h2>Back-end</h2>
        <div>
          {backend && backend.map(skill => {
            return <span key={skill.name} style={{ "background": skill.color }}>{<skill.icon />}{skill.name}</span>
          })}
        </div>
      </section>
      <section>
        <h2>Tools</h2>
        <div>
          {tools && tools.map(skill => {
            return <span key={skill.name} style={{ "background": skill.color }}>{<skill.icon />}{skill.name}</span>
          })}
        </div>
      </section>
    </section>
  )
}

export default Skills;