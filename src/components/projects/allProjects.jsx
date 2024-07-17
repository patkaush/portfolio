import React,{useState} from "react";

import Project from "./project";

import projects from "../../data/projects";
import "./styles/allProjects.css";
import NavBar from "../common/navBar";
import { Typography } from "@mui/material";

const AllProjects = () => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
	  setExpanded(isExpanded ? panel : false);
	};

	return (
		<div  >

		<Typography variant="h2" align="center" className='section-title' style={{color:' var(--primary-color) '}}>Projects</Typography>

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
