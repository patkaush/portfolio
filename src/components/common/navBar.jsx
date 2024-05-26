import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import "./styles/navBar.css";
import { useState } from 'react'

let NavBar = () => {
	return (
<React.Fragment>
<div className="nav-container">
	<nav className="navbar">
		<div className="nav-background">
			<ul className="nav-list">
						
				<li><Link to="home_section" spy={true} smooth = {true}  offset={-70} className={"nav-item"} activeClass="active">Home</Link></li>
					<li><Link to="works_section" spy={true} smooth = {true}  offset={-70}className={"nav-item"}  activeClass="active">Works</Link></li>
					<li><Link to="projects_section" spy={true} smooth={true}  offset={-70} className={"nav-item"} activeClass="active">Projects</Link></li>
			</ul>
		</div>
	</nav>
</div>
</React.Fragment>

	);
};


export default NavBar;