import { Language } from "@mui/icons-material";
import skill_sets from "./skills";
let projects =[
		{
			title: "Placement Information System",
			description:
				"Implemented a robust three-tier architecture web application focusing on recommending companies to users based on their interests and skill sets.", 
			details : ["Orchestrated the design and developed a robust three-tier architecture web application, utilizing ReactJS for the frontend and Spring MVC, Spring REST for backend APIs, resulting in a 30% improvement in user interface responsiveness.",
			"Integrated a hybrid recommendation system, employing the Naive Bayes Classifier and K-Nearest Neighbors (KNN) algorithm to deliver personalized company recommendations to users, contributing to a 25% reduction in the time required for users to make decisions about potential companies"
			],
					  	
			techStack: {
				languages :{"Java":skill_sets["languages"]["Java"], "JavaScript":skill_sets["languages"]["JavaScript"]},
				frameworks:{"Spring Framework" : skill_sets["frameworks"]["Spring Framework"],"ReactJS" : skill_sets["frameworks"]["ReactJS"]},
				databases : {"PostgreSql":skill_sets["databases"]["PostgreSql"]},
				},
			linkText: "View Code",
			link: "https://github.com/patkaush/PlacementGuide-Major-Project-",
		},

		{
			title: "Public Service Complaint Register",
			description:
				"An android application which allows users to file municipal complaints.",
			details :  ["Developed an Android application in Java using Android Studio, resulting in a 30% increase in user satisfaction for municipal complaint filing. Utilized SQL databases for efficient data storage and retrieval.",
						"Integrated a Decision Tree machine learning model, leading to a 25% improvement in automated complaint prioritization and a 20% overall efficiency gain."],
			techStack: {								
						languages :{"Java":skill_sets["languages"]["Java"], "SQL":skill_sets["languages"]["SQL"]}
			},

						logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Youtube Song Downloader and Editor",
			description : "A static web application authorizes the download of songs in Mp3 format from a specific website using web scraping.",
			details : ["A static web application authorizes the download of songs in Mp3 format from a specific website using web scraping.",
						"Allows the users to edit the audio.",
						"Developed using Django framework (backend - Python, Frontend - HTML, CSS, JavaScript).",
						"Uses selenium framework for Web scraping."],
			techStack: {
				languages :{"Python":skill_sets["languages"]["Python"]},
				frameworks:{"Django" : skill_sets["frameworks"]["Django"]},
				tools:{"Selenium":skill_sets["tools"]["Selenium"]}
			},
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Mini-Wikipedia",
			description:
				"A dynamic web application that displays information fetched from a database.",
			details : ["A dynamic web application that displays information fetched from a database.",
				"Allows users to edit and update information and changes made by one user get reflected across all other users.",
				"Developed using Django framework (backend - Python, Frontend - HTML, CSS,Javascript).",
				"Uses MySQL for the database."],
			techStack: {
				languages :{"Python":skill_sets["languages"]["Python"]},
				frameworks:{"Django" : skill_sets["frameworks"]["Django"]},
				databases:{"MySql":skill_sets["databases"]["MySql"]}
				},
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Mini-Pacman",
			description:
				"A single-level 2-D game where a player has to collect the food (without being caught by the enemies) to win the game.",
			details : ["A single-level 2-D game where a player has to collect the food (without being caught by the enemies) to win the game.",
						"Created using C language."],
					  	

			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	];

export default projects;
