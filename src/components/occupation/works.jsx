import React, { useState } from 'react';

import "../../data/styles.css";
import workProfiles from "../../data/works";
import WorkProfile from "./work_profile";
import "./styles/works.css";
import {
	VerticalTimeline,
	VerticalTimelineElement
  } from "react-vertical-timeline-component";
  import "react-vertical-timeline-component/style.min.css";

import {Typography} from "@mui/material/";
const Works = () => {	


	return (
		<div  className="works-main-container">

      <Typography variant="h1"  className='section-title' style={{color:' var(--primary-color) '}}>Professional experience</Typography>
				<VerticalTimeline layout="1-column-left"  className="works-container">
						{workProfiles.map((workProfile, index) => (
							<VerticalTimelineElement
                className = {"workDetail" + (index + 1).toString()}
                contentStyle={{  background:"#F3F1E5" ,color: 'var(--secondary-color)',borderRadius:"20px" }}
                contentArrowStyle={{ borderRight: '10px solid  var(--tertiary-color)' }}
								key={(index + 1).toString()}
                iconStyle={{ background: '#F3F1E5', color: '#fff' }}
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
