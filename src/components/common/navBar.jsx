import React from "react";
import { Link } from 'react-scroll';
import "./styles/navBar.css";
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import HandymanIcon from '@mui/icons-material/Handyman';
import ComputerIcon from '@mui/icons-material/Computer';
import WorkIcon from '@mui/icons-material/Work';
import { ContactMail, Padding } from "@mui/icons-material";
let NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const icons = [
        { icon: <HomeIcon />, name: "Home" ,link : "home_section"},
        { icon: <WorkIcon />, name: "Works" ,link : "works_section"},
        { icon: <ComputerIcon />, name: "Projects" ,link : "projects_section"},
        { icon: <HandymanIcon />, name: "Skills" ,link : "skills_section"},
        { icon: <ContactMail />, name: "Contact" ,link : "contact_section"},
    ];
	return (
        <div className="nav-container">
        <Box >
                <BottomNavigation showLabels id="bottom-nav">
                    {icons.map((item, index) => (
                        <Link to = {item.link} key={index} spy={true} smooth = {true}    activeClass="active" >
                            <Tooltip title={item.name}  placement="top"  >
                                <IconButton className="nav-item"  >
                                    {item.icon}
                                </IconButton>
                            </Tooltip>
                    </Link>
                    ))}

                </BottomNavigation>
            </Box>
        <Box className = "navbar">
            {icons.map((item, index) => (
                <Link to = {item.link} key={index} spy={true} smooth = {true}    activeClass="active" >
                    <Tooltip title={item.name}  placement="right" >
                        <IconButton className="nav-item"  >
                            {item.icon}
                        </IconButton>
                    </Tooltip>
            </Link>
            ))}
    		</Box> 

		 </div>
	);
};


export default NavBar;