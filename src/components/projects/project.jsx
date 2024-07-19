import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Paper,Box,Stack ,  Grid, Icon} from '@mui/material';

import ProjectDetails from "./projectDetails";
import "./styles/project.css";
import { List,ListItem,Card,Typography,CardContent } from "@mui/material";

import { styled } from '@mui/material/styles';
import {mergeSkills,HoneyCombGrid} from "../common/HoneyCombGrid";
const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
  }));


 let project_summary = (title,description) =>{
	return (
		<>
			<Typography sx={{ width: '33%', flexShrink: 0 }}>
					{title}
			</Typography>
			<Typography sx={{ color: 'var(--quaternary-color)' }}>{description}</Typography>
		</>

	)	
 } 
 let project_header = (title,date) => {
	return (
		<>
			<Grid container sx={{ justifyContent:"flex-end" }}>
				<Grid item  xs = {12} sx={{ display:"flex",justifyContent:"center" }}>
					<Typography variant="h4" className = "project-title" >
						{title} 
					</Typography>
				</Grid>
				<Grid item  >
				<Typography className = "project-title" >
						{date} 
					</Typography>
				</Grid>

			</Grid>
		</>
	)
 }


const Project = (props) => {
	let projectProfile = props.project;
	const [title, description, details] = [projectProfile.title,projectProfile.description,projectProfile.details];
	
    let detailsUILIist = []
    details.forEach( (detail,index) => {
        detailsUILIist.push( <ListItem key={index} sx={{ display: 'list-item' }}>{detail}</ListItem>)
    });
	const techStack = projectProfile.techStack;
	return (
			<Accordion expanded={props.expanded } onChange={props.handleChange} className="project-container">
				<AccordionSummary
					expandIcon={<ExpandMoreIcon fontSize="large" sx={{color : "var(--quaternary-color)"}}/>}
					>
						{
							props.expanded ? project_header(title,projectProfile.date): project_summary(title,description) 
						}
				</AccordionSummary>
				<AccordionDetails>
					<Typography sx={{ width: '33%', flexShrink: 0 }}> Description</Typography>
					<List sx={{
					listStyleType: 'disc',
					listStylePosition: 'inside'
					}}
					>
						{detailsUILIist}
					</List>
					{techStack != null ?
						<div>
							<Typography sx={{ width: '33%', flexShrink: 0 }}> Technology Used</Typography> 
								<div className="tech-stack"> 
									{/* {Object.entries(techStack).map( ([title,technologies]) =>
										<Stack direction="row" spacing={2}  className="tech-stack-container" >
											<Typography variant="h7"  gutterBottom className='tech-title'>
											{title}:
											</Typography> */}
								<HoneyCombGrid skills = {mergeSkills(techStack)}/>
											{/* {Object.entries(technologies).map( ([name,icon]) => 
												<Paper elevation={3} className='tech-button'>
												<Box display="flex" textAlign="center">
													<Typography variant="h7"  className='skill-name'>
														{name}              
													</Typography>
													<Icon fontSize="large" className='skill-icon'>
														{icon}
													</Icon>
												</Box>
												</Paper>
												)} */}
										{/* </Stack>
									)} */}
								</div>
						</div>
					: <div/>}
				</AccordionDetails>
			</Accordion>

	);
};

export default Project;
