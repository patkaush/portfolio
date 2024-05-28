import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";
import NavBar from "../common/navBar";

const AllProjects = () => {
	return (
		<div  >

		<h1 className="center-text">Projects</h1>
		<div className="all-projects-container">


			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						details={project.details}
						link={project.link}
					/>
				</div>
			))}
		</div>
		</div>
	);
};

export default AllProjects;
