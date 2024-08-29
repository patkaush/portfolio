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
		<Card sx={{ minWidth: 275, backgroundColor:"transparent",boxShadow:"None" }}  >
		<CardContent>
			<Grid container>
			  <Grid  xs={9}>
			  <Typography className="work-position"variant="titles" >{workProfile.position}</Typography>
			  </Grid>
			  <Grid  xs = {3} sx={{alignContent:"center",textAlign:"right"}}>
			  <Typography className="work-date"variant="h7" >{workProfile.date_of_joining + " - " + workProfile.data_of_ending} </Typography>
			  </Grid>
			  <Grid  xs={10}>
			  <Typography className="work-company"variant="subtitles" >{workProfile.company_name} </Typography>
			  </Grid>
			  <Grid  xs={2} sx={{alignContent:"center",textAlign:"right"}}>
			  <Typography className="work-location"variant="h7" >{workProfile.location} </Typography>
			  </Grid>
			  <Grid xs = {12} style={{textAlign:"center",marginTop:"20px"}}>
				<Typography variant='boldText' className="work-summary" >{workProfile.summary}</Typography>
			  </Grid>
			</Grid>
		</CardContent>
		<CardActions disableSpacing style={{padding:"0"}}>
		  <Button className="read-more-button" size="small"  onClick={handleExpandClick} style={{color:'var(--primary-color)',padding:"0",textTransform:"none"}}>
		   <Typography variant='subtitles' style={{textAlign:"right",color : "var(--secondary-color)"}}>{expanded ?"Hide Details" : "Read more"} </Typography>
		   
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
