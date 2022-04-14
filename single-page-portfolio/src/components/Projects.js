import React from "react";
import "./Projects.css";
import { projects } from "../data"; 

export default function Projects () {
    return (
        <div className="project-container" id="projects">
            <h1>
                Past Projects 
            </h1>
            {projects.map((project) => (
                <h2>
                    {project.project_name}
                </h2>
            ))}
        </div>
    )
}