import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Works from "../components/occupation/works";
import AllProjects from "../components/projects/allProjects";
import Contact from "../components/contact/contact";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";
import Education from "../components/education/education";
import Skills from "../components/skills/skills";
import AboutMe from "../components/about/about";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);


	const currentSEO = SEO.find((item) => item.page === "home");


	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div  className="page-content">
				<div className="content-wrapper">


					<div id="home_section" className="homepage-container">
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
