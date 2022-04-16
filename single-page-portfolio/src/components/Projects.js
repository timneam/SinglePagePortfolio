import React from "react";
import "./Projects.css";
import { projects } from "../data"; 
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

export default function Projects () {
    return (
        <div className="project-container" id="projects">
            <h1>
                Past Projects 
            </h1>
            <div className="project-columns">
            {projects.map((project) => {
                return (
                <div className="card-container">
                    <h2>
                        {project.project_name}
                    </h2>
                    {project.description}
                    <br/>
                    <br/>
                    {project.date}
                    <br/>
                    <br/>
                    <div className="buttons">
                        <button className="button-design">
                            <a href={project.github} target="_blank" className="button-a">
                                Github
                            </a>
                        </button>
                        <button className="button-design">
                            <a href={project.youtube} target="_blank" className="button-a">
                                Demo
                            </a>
                        </button>
                    </div>
                </div>
                )
            })}
            </div>
        </div>
    )
}