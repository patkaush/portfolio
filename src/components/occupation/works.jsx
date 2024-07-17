import React, { useState } from 'react';

import DescriptionDrawer from "../common/descriptionDrawer";
import WorkIcon from '@mui/icons-material/Work';
import iconInternship from "../../images/internship-icon.svg";
import "../../data/styles.css";
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


	return (
		<div  className="works-main-container">

      <Typography variant="h2"  align="center" className='section-title' style={{color:' var(--primary-color) '}}>Professional experience</Typography>
				<VerticalTimeline layout="1-column-left"  className="works-container">
						{workProfiles.map((workProfile, index) => (
							<VerticalTimelineElement
                className = {"workDetail" + (index + 1).toString()}
                contentStyle={{ background: 'var(--quaternary-color)', color: 'var(--secondary-color)',borderRadius:"20px" }}
                contentArrowStyle={{ borderRight: '10px solid  var(--tertiary-color)' }}
								key={(index + 1).toString()}
                lineColor = "#131842"
                iconStyle={{ background: 'var(--tertiary-color)', color: '#fff' }}
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
