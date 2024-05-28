import React from "react";

import educationProfile from "../../data/education";

import "./styles/education.css";
import EducationCard from "./educationCard";

const Education = () => {
	return (
		<div  >

		<h1 className="center-text">Education</h1>
		<div className="education-container">


			{educationProfile.map((profile, index) => (
				<div className="education-details" key={index}>
					<EducationCard profile = {profile}/>
				</div>
			))}
		</div>
		</div>
	);
};

export default Education;
