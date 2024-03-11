import BtnGitHub from "../components/btn-git-hub/btn-git-hub";
import imgBig from "./../img/01-big.jpg"

function Project() {
    return (

        <div className="container">
            <div className="project-details">
                {/* <h1 className="title-1">{project.title}</h1> */}

                <img
                    src={imgBig}
                    // alt={project.title}
                    className="project-details__cover"
                />

                <div className="project-details__desc">
                    {/* <p>Skills: {project.skills}</p> */}
                </div>

                {/* {project.gitHubLink && (
                    <BtnGitHub link="https://github.com" />
                )} */}

                <BtnGitHub link="https://github.com" />
            </div>
        </div>

    )
}

export default Project;