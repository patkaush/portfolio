import React from "react";
import { Link } from 'react-scroll';

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li >
							<Link to="home_section" spy={true} smooth = {true}  offset={-70} className="footer-nav-link-item">Home</Link>
						</li>
						<li >
							<Link to="skills_section" spy={true} smooth = {true}  offset={-70} className="footer-nav-link-item">Skills</Link>
						</li>
						<li >
							<Link to="education_section" spy={true} smooth = {true}  offset={-70} className="footer-nav-link-item">Education</Link>
						</li>
						<li >
							<Link to="works_section" spy={true} smooth = {true}  offset={-70} className="footer-nav-link-item">Works</Link>
						</li>
						<li >
							<Link to="projects_section" spy={true} smooth = {true}  offset={-70} className="footer-nav-link-item">Projects</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2024 Kaushik Pattipati. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
