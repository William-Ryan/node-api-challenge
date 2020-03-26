import React from "react";

const ProjectCard = props => {
    return (
        <div>
            <h1>{props.project.name}</h1>
            <p>{props.project.description}</p>
            <h3>{props.project.completed}</h3>
        </div>
    )
}

export default ProjectCard