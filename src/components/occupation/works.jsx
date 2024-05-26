import React from "react";

import DescriptionDrawer from "../common/descriptionDrawer";

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

const WorkIcon = () => <></>;

const Works = () => {	
  const [open, setOpen] = React.useState(false);
  const [workDetails, setDetails] = React.useState([]);

  const toggleDrawer = (newOpen,workProfile = null) => () => {
    setOpen(newOpen);
    if(newOpen){
      setDetails(workProfile);
  
    }
  }; 
  
	return (
		<div id = "works_section" className="works-main-container">

      <h1>Professional experience</h1>
      <Drawer
            anchor={"right"}
            open={open}
            onClose={toggleDrawer(false)}
          >
          <DescriptionDrawer workDetails = {workDetails}/>
        </Drawer>


				<VerticalTimeline layout="1-column-left" className="works-container">
						{workProfiles.map((workProfile, index) => (
							<VerticalTimelineElement
                className = {"workDetail" + (index + 1).toString()}
								key={(index + 1).toString()}
                date={workProfile.date_of_joining + " - " + workProfile.data_of_ending} 
                iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
                icon={<WorkIcon />}
                >
                  <div onClick={toggleDrawer(true,workProfile)}>
                      <h3 className="vertical-timeline-element-title">
                        {workProfile.position}
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">{workProfile.company_name}</h4>
                      <h5 className="vertical-timeline-element-subtitle">{workProfile.location}</h5>
                      <p>{workProfile.summary}</p>
                      
                  </div>
            </VerticalTimelineElement>
						))}
			
        </VerticalTimeline>

			</div>
	);
};

export default Works;
