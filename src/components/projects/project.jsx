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
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));
const Project = (props) => {
	let projectProfile = props.project;
	const [title, description, details] = [projectProfile.title,projectProfile.description,projectProfile.details];
	
    let detailsUILIist = []
    details.forEach( (detail,index) => {
        detailsUILIist.push( <ListItem key={index} sx={{ display: 'list-item' }}>{detail}</ListItem>)
    });
	const techStack = projectProfile.techStack;
	return (
			<div className="project-container">
			<Accordion expanded={props.expanded } onChange={props.handleChange} >
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					>
					<Typography sx={{ width: '33%', flexShrink: 0 }}>
							{title}
					</Typography>
					<Typography sx={{ color: 'text.secondary' }}>{description}</Typography>
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
									{Object.entries(techStack).map( ([title,technologies]) =>
										<Stack direction="row" spacing={2}  className="tech-stack-container" >
											<Typography variant="h7"  gutterBottom className='tech-title'>
											{title}:
											</Typography>
											{Object.entries(technologies).map( ([name,icon]) => 
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
												)}
										</Stack>
									)}
								</div>
						</div>
					: <div/>}
				</AccordionDetails>
			</Accordion>
			</div>

	);
};

export default Project;
