import React from "react";
import { Link } from 'react-scroll';

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="home_section">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="works_section">Works</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="projects_section">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
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
