import React,{useState} from "react";

import Project from "./project";

import projects from "../../data/projects";
import "./styles/allProjects.css";
import NavBar from "../common/navBar";

const AllProjects = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
	  setExpanded(isExpanded ? panel : false);
	};

	return (
		<div  >

		<h1 className="center-text">Projects</h1>

		<div className="all-projects-container">


			{projects.map((project, index) => (
				
				<div className="all-projects-project" key={index}>
					<Project
						project={project}
						expanded = {expanded === index }
						handleChange = {handleChange(index)}
					/>
				</div>
			))}
		</div>
		</div>
	);
};

export default AllProjects;
