import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import "./styles/navBar.css";

let NavBar = (props) => {
	const { isActive } = props;
	return (
<React.Fragment>
<div className="nav-container">
	<nav className="navbar">
		<div className="nav-background">
			<ul className="nav-list">
				<li
					className={
						isActive ? "nav-item active"
							: "nav-item"
					}
				>
					<Link to="home_section" smooth = {true} >Home</Link>
				</li>
				<li
					className={
						isActive ? "nav-item active"
							: "nav-item"
					}
				>
					<Link to="works_section" spy={true} smooth = {true}>Works</Link>
				</li>
				<li
					className={
						isActive ? "nav-item active"
							: "nav-item"
					}
				>
					<Link to="projects_section" spy={true} smooth={true}>Projects</Link>
				</li>
			</ul>
		</div>
	</nav>
</div>
</React.Fragment>

	);
};


export default NavBar;