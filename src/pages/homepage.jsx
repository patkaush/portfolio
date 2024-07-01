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


					<div className="homepage-aboutme" id="home_section" >
						<div className="content-wrapper">
							<AboutMe className="container"/>
						</div>
					</div>
					<div className="homepage-skills" id = "skills_section">
						<div className="content-wrapper">
							<Skills />
						</div>

					</div>
					<div className="homepage-education" id = "education_section">
						<div className="content-wrapper">
							<Education />
						</div>
					</div>					
					<div className="homepage-works" id = "works_section">
						<div className="content-wrapper">
							<Works />
						</div>
					</div>
					<div className="homepage-projects" id="projects_section">
						<div className="content-wrapper">
							<AllProjects />
						</div>
					</div>
					<div className="homepage-contact" id="contact_section">
						<div className="content-wrapper">
							<Contact />
						</div>
					</div>
					<div className="page-footer">
						<div className="content-wrapper">
							<Footer />
						</div>
					</div>
				</div>

		</React.Fragment>
	);
};

export default Homepage;
