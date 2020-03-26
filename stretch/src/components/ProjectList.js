import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard"
import { connect } from "react-redux";

import { fetchProjects } from "../actions/projectActions"

const ProjectList = props => {

    useEffect(() => {
        props.fetchProjects()
    }, [])

    return(
        <div>
            <h1 className="title">Project List App</h1>
            <div classname="card-container">
                {props.projects.map(project => (
                    <ProjectCard project={project}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        projects: state.projects,
        isFetching: state.isFetching,
        errors: state.errors
    }
}

export default connect(
    mapStateToProps,
    { fetchProjects }
)(ProjectList);