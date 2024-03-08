import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectSection = () => {
    return (
        <section className="projects__container">
            <h1 className="projects__title">Projetos</h1>
            <ul className="projects__list">
                {projects.map((el) => ( 
                    <ProjectCard name={el.name} description={el.description}/>
                ))}
            </ul>
        </section>
    )
}

export default ProjectSection;