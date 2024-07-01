import React, { useState } from 'react';

import DescriptionDrawer from "../common/descriptionDrawer";
import WorkIcon from '@mui/icons-material/Work';
import iconInternship from "../../images/internship-icon.svg";

import workProfiles from "../../data/works";
import WorkProfile from "./work_profile";
import Drawer from '@mui/material/Drawer';
import "./styles/works.css";
import {
	VerticalTimeline,
	VerticalTimelineElement
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";
import NavBar from "../common/navBar";
import { Icon } from "@mui/material";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button/';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import UnoImage from "../../images/uno_img.png"
import Collapse from '@mui/material/Collapse';

import {Typography} from "@mui/material/";
const Works = () => {	
  // const [open, setOpen] = React.useState(false);
  // const [workDetails, setDetails] = React.useState([]);
  
  // const toggleDrawer = (newOpen,workProfile = null) => () => {
  //   setOpen(newOpen);
  //   if(newOpen){
  //     setDetails(workProfile);
  
  //   }
  // }; 

	return (
		<div  className="works-main-container">

      <Typography variant="h4" gutterBottom align="center">Professional experience</Typography>
				<VerticalTimeline layout="1-column-left"  className="works-container">
						{workProfiles.map((workProfile, index) => (
							<VerticalTimelineElement
                className = {"workDetail" + (index + 1).toString()}
                contentStyle={{ background: '#E6F4F1', color: 'black' }}
                contentArrowStyle={{ borderRight: '10px solid  #E6F4F1' }}
								key={(index + 1).toString()}
                iconStyle={{ background: '#94ABE1', color: '#fff' }}
                icon={workProfile.icon}
                >
                  {console.log("profile in  works",workProfile)}
                  <WorkProfile workProfile={workProfile}/>
            </VerticalTimelineElement>
						))}
			
        </VerticalTimeline>

			</div>
	);
};

export default Works;
