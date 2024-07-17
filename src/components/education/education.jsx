import React from "react";

import educationProfile from "../../data/education";

import "./styles/education.css";
import EducationCard from "./educationCard";
import { Typography } from "@mui/material";

const Education = () => {
	return (
		<div  >

		<Typography variant="h3" className="center-text">Education</Typography>
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
