import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button/';
import CardMedia from '@mui/material/CardMedia';
import {Typography} from "@mui/material/";
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';


import "./styles/workProfile.css";
import DescriptionDrawer from '../common/descriptionDrawer';

const WorkProfile = (props) => {
	const workProfile = props.workProfile;
	console.log("profile",workProfile)
	const [expanded, setExpanded] = useState(false);

	const handleExpandClick = () => {
	  setExpanded(!expanded);
	};
	
	return (
		<Card sx={{ minWidth: 275 }}  className='card-item'>
		<CardContent>
			<Grid container>
			  <Grid  xs={9}>
			  <Typography className="work-date"variant="h4" >{workProfile.position}</Typography>
			  </Grid>
			  <Grid  xs = {3} sx={{alignContent:"center"}}>
			  <Typography className="work-date"variant="h7" >{workProfile.date_of_joining + " - " + workProfile.data_of_ending} </Typography>
			  </Grid>
			  <Grid  xs={10}>
			  <h4 >{workProfile.company_name}</h4>
			  </Grid>
			  <Grid  xs={2}>
			  <h5 >{workProfile.location}</h5>
			  </Grid>
			  <Grid  >
				<p>{workProfile.summary}</p>
			  </Grid>
			</Grid>
		</CardContent>
		<CardActions disableSpacing>
		  <Button className="read-more-button" size="small" margin onClick={handleExpandClick} >
		  {expanded ? "Hide Details" : "Read more"}
		  </Button>

		</CardActions>
		<Collapse in={expanded} timeout="auto" unmountOnExit>
		  <CardContent className="workProfile-content">
				<DescriptionDrawer workDetails={workProfile}/>
		  </CardContent>
		</Collapse>

	  </Card>

	);
};

export default WorkProfile;
