import "./styles/projectCard.scss";

const ProjectCard = ({ img, imgBlur, title, description, tech, siteLink, repoLink }: Project) => {
  return (
    <article>
      <div id="projectImage">
        <img src={imgBlur} alt={title} />
        <img src={img} alt={title} />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <div id="tech">
          {tech && tech.map((t: Skill) => {
            return <span key={t.name} style={{ "background": t.color }}>{<t.icon />}{t.name}</span>
          })}
        </div>
        <div id="links">
          {siteLink && <a target="_blank" href={siteLink}>Visit Site</a>}
          {repoLink && <a target="_blank" href={repoLink}>Visit Repo</a>}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard;