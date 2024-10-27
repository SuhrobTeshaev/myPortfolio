import React from "react";
import {projects} from  './../components/helpers/projectList';
import Project from "../components/project/Project";
import { useTranslation } from "react-i18next";
const Projects = (props) => {
const { t } = useTranslation();
    return (
        <main className="section">
        <div className="container">
            <h2 className="title-1">{t("projects.label")}</h2>
            <ul className="projects">
               {projects.map(( project)=>{
                return <Project 
                key={project.id} 
                title={project.title} 
                img={project.img} 
                github={project.gitHubLink}
                id={project.id}
                />

                
               })}

            </ul>
        </div>
    </main>
      );
}
 
export default Projects;