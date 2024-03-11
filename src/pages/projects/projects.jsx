import "./style.css"
import Project from "../../components/project/project";
import { projects } from "../../helpers/project-list";

function Projects() {
    return (
        <div className="section">
            <div className="container-main">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">

                    {projects.map((project) => {
                        return <Project title={project.title} img={project.img} key={project.id} />;
                    })}

                </ul>
            </div>
        </div>
    )
}

export default Projects;