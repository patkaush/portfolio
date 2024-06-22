import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import "./styles/navBar.css";
import Typography from '@mui/material/Typography';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import HandymanIcon from '@mui/icons-material/Handyman';
import ComputerIcon from '@mui/icons-material/Computer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import WorkIcon from '@mui/icons-material/Work';
import ServicesIcon from '@mui/icons-material/Build';
import AboutIcon from '@mui/icons-material/Info';
import ContactIcon from '@mui/icons-material/ContactMail';
import { ContactMail, Padding } from "@mui/icons-material";
let NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const icons = [
        { icon: <HomeIcon />, name: "Home" ,link : "home_section"},
        { icon: <HandymanIcon />, name: "Skills" ,link : "skills_section"},
        { icon: <AccountBalanceIcon />, name: "Education" ,link : "education_section"},
        { icon: <WorkIcon />, name: "Works" ,link : "works_section"},
        { icon: <ComputerIcon />, name: "Projects" ,link : "projects_section"},
        { icon: <ContactMail />, name: "Contact" ,link : "contact_section"},
    ];
	return (
        <div className="nav-container">
                <BottomNavigation showLabels id="bottom-nav">
                    {icons.map((item, index) => (
                        <Link to = {item.link} key={index} spy={true} smooth = {true}  offset={-40}  activeClass="active" >
                            <Tooltip title={item.name}  placement="top"  >
                                <IconButton className="nav-item"  >
                                    {item.icon}
                                </IconButton>
                            </Tooltip>
                    </Link>
                    ))}

                </BottomNavigation>
        <Box className = "navbar">
            {icons.map((item, index) => (
                <Link to = {item.link} key={index} spy={true} smooth = {true}  offset={-40}  activeClass="active" >
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