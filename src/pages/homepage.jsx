import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/occupation/works";
import AllProjects from "../components/projects/allProjects";
import Contact from "../components/contact/contact";
import INFO from "../data/user";
import SEO from "../data/seo";
import { Parallax } from 'react-parallax';
import bgImage from "../images/background-img.jpg"
import "./styles/homepage.css";
import Education from "../components/education/education";
import Skills from "../components/skills/skills";
import AboutMe from "../components/about/about";
import Home from "../components/home/home"
const Homepage = () => {


	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);




	return (
		<React.Fragment>

			<Home/>
			<div  className="page-content">
				<div className="content-wrapper">


					<div className="homepage-aboutme" id="home_section" >
						<AboutMe/>
					
					</div>
					<div className="homepage-skills" id = "skills_section">
						<Skills />
					</div>
					<div className="homepage-education" id = "education_section">
						<Education />
					</div>
					
					<div className="homepage-works" id = "works_section">
						<Works />
					</div>

					<div className="homepage-projects" id="projects_section">
						<AllProjects />
					</div>

					<div className="homepage-contact" id="contact_section">
						<Contact />
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
