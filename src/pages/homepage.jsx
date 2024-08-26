import React, { useState, useEffect } from "react";

import Works from "../components/occupation/works";
import AllProjects from "../components/projects/allProjects";
import Contact from "../components/contact/contact";
import "./styles/homepage.css";
import Skills from "../components/skills/skills";
import AboutMe from "../components/about/about";
import Home from "../components/landingPage/home"
import { ThemeProvider, createTheme } from '@mui/material/styles';

const fontType = createTheme({

	typography: {
		fontFamily: 'Open Sans, sans-serif',
		fontSize: 16,
		h1: {
		  fontSize: '4rem',
		  fontWeight: 700,
		},
		titles: {
			fontSize: '2rem',
			fontWeight: 550,
		},
		subtitles: {
			fontSize: '1.3rem',
			fontWeight: 400,
		},
		subheading: {
		fontSize: '1.6rem',
		fontWeight: 500,
		},
		  paragraph: {
		  fontSize: '1.2rem',
		  fontWeight: 500,
		  lineHeight:1.5
		},
		boldText: {
			fontSize: '1.3rem',
			fontWeight: 700, // Custom bold style
		  },
		button: {
		  fontSize: '0.875rem',
		  fontWeight: 500,
		},
	  },	
  });
const Homepage = () => {


	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);




	return (
		<React.Fragment>
			<ThemeProvider theme={fontType}>
			<Home/>
			<div  className="page-content">


					<div className="homepage-aboutme" id="home_section" >
						<div className="content-wrapper">
							<AboutMe className="container"/>
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

					<div className="homepage-skills" id = "skills_section">
						<div className="content-wrapper">
							<Skills />
						</div>

					</div>
					{/* <div className="homepage-education" id = "education_section">
						<div className="content-wrapper">
							<Education />
						</div>
					</div>					 */}
					<div className="homepage-contact" id="contact_section">
						<div className="content-wrapper">
							<Contact />
						</div>
					</div>

				</div>
				</ThemeProvider>
		</React.Fragment>
	);
};

export default Homepage;
