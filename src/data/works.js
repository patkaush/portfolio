import React from "react";
import skill_sets from "./skills";
import iconInternship from "../images/internship-icon.svg";
import WorkIcon from '@mui/icons-material/Work';
import { Icon,Tooltip } from "@mui/material";
function parseWorkData(){
	let work_array = internship.concat(full_time) ;
	work_array = work_array.concat( assistantship)
	return work_array.sort(function(a, b)
	{
	 var x = new Date(a["date_of_joining"]).getTime(); 
	 var y = new Date(b["date_of_joining"]).getTime();

	 return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	}).reverse();
   
}
const internship = [
	 {
		company_name : "Opentext",
		position:  "Engineering Intern",
		location : "Hyderabad, India",
		date_of_joining: "July 2021",
		data_of_ending: "Aug 2021",
		icon : <Tooltip title="Internship"><Icon  className="vertical-timeline-icon">  <img  src={iconInternship}/> </Icon></Tooltip>,
		summary:"Performance metrics, Selenium Framework",
		tech_stack : {"languages":{"Java":skill_sets["languages"]["Java"]},
						"tools":{"Selenium":skill_sets["tools"]["Selenium"]},
						"frameworks":{},
						"databases":{}

					},

		description:[ "Engineered and implemented automated test suites using the Selenium Framework, resulting in a 30% reduction in manual efforts and ensuring a 20% increase in testing efficiency.",
		"Validated the application’s performance using JUnit Meter, identifying memory leaks and led to a 25% improvement in overall code optimization, enhancing application performance."]
	}
	// {
	// 	company_name : "Ameritas",
	// 	position:  "IT Architecture Intern",
	// 	location : "Omaha, NE",
	// 	date_of_joining: "May 2024",
	// }
]
const full_time = [
	{ company_name : "Opentext",
		position:  "Software Engineer",
		location : "Bengaluru, India",
		date_of_joining: "Sep 2021",
		data_of_ending: "Aug 2023",
		summary:"Software Development, Java Full stack, Spring Framework, API design, Kubernetes",
		icon :  <Tooltip title="Full-time"><WorkIcon sx={{ color: "black" }}/></Tooltip>,
		tech_stack : {"languages":{"Java":skill_sets["languages"]["Java"]},
						"tools":{"Fortify Security tool":skill_sets["tools"]["Fortify Security tool"],
								"TeamCity":skill_sets["tools"]["TeamCity"],
								"Docker":skill_sets["tools"]["Docker"]
								},
						"databases":{"Oracle":skill_sets["databases"]["Oracle"],
									"MySql":skill_sets["databases"]["MySql"]
								},
						"frameworks":{"Spring Framework" : skill_sets["frameworks"]["Spring Framework"],
										"REST Services":skill_sets["frameworks"]["REST Services"]
								}
		},
		description:["Full stack Java software engineer for a B2B product, called Biz manager, played a pivotal role in the software development of more than 20 major feature releases of the product, increasing the overall client experience by 50%.",
		"Resolved more than 50 production bugs, increasing the system stability and achieved a 80% reduction in vulnerabilities, enhancing overall code quality and software security.",
		"Analyzed and addressed database query performance issues, by providing optimized SQL queries led to 10% faster query response time when fetching thousands of records.",
		"Analyzed vital components, like rule and document processing, leading to a 20% efficiency increase in business document parsing and routing.",
		"Technologies involved- Java, Spring Framework, REST, Dockers, Kubernetes, Databases, Fortify, BlackDuck and JUnit."]
	}
]
const assistantship = [
	{
		company_name : "University of Nebraska, Omaha",
		position:  "Voluntary Student worker",
		location : "Omaha, NE",
		date_of_joining: "Sep 2023",
		data_of_ending: "Nov 2023",
		summary : "Data visulizations, Python, R",
		icon : <Tooltip title="Internship"><Icon  className="vertical-timeline-icon">  <img src={iconInternship}/> </Icon></Tooltip>,
		tech_stack : {"languages":{"Python":skill_sets["languages"]["Python"]},
						"tools":{},
						"frameworks":{},
						"databases":{}
					},
		description : [ "Collaborated with Dr.Kishore to provide compelling data visualizations using R and Python, resulting in a 20% improvement in research clarity.",
				"Applied technical expertise to enhance research analysis, delivering cleaned datasets, reducing analysis time by 50%."]
	},
	{
		company_name : "University of Nebraska, Omaha",
		position:  "Graduate researcher",
		location : "Omaha, NE",
		date_of_joining: "Jan 2024",
		data_of_ending: "Mar 2024",
		summary : "Bridge simulations, Unreal Engine, AirSim plugin.",
		icon : <Tooltip title="Internship"><Icon className="vertical-timeline-icon">  <img src={iconInternship}/> </Icon></Tooltip>,
		tech_stack : {"languages":{"Python":skill_sets["languages"]["Python"]},
					"tools":{},
					"frameworks":{},
					"databases":{}
		},		
		description : ["Engaged in generating bridge simulations with Unreal Engine and deploying UAV drones using AirSim plugin to implement reinforcement learning agents."]
	}
]


let workProfiles = parseWorkData();


export default workProfiles;
