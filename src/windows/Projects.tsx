import "./styles/projects.scss";
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/ProjectList";

const Projects = () => {
  // Tech filter
  return (
    <section id="projects">
      <div>
        {projects && projects.map((project, i) => {
          if (i % 2 === 0) {
            return <ProjectCard
              key={project.title + Math.random()}
              img={project.img}
              imgBlur={project.imgBlur}
              title={project.title}
              description={project.description}
              tech={project.tech}
              siteLink={project.siteLink}
              repoLink={project.repoLink} />
          }
        })}
      </div>
      <div>
        {projects && projects.map((project, i) => {
          if (i % 2 != 0) {
            return <ProjectCard
              key={project.title + Math.random()}
              img={project.img}
              imgBlur={project.imgBlur}
              title={project.title}
              description={project.description}
              tech={project.tech}
              siteLink={project.siteLink}
              repoLink={project.repoLink} />
          }
        })}
      </div>
    </section>
  )
}

export default Projects;