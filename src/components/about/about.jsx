import React from 'react';
import { Grid, Paper, Typography,Box } from '@mui/material';
import INFO from "../../data/user";
import "./styles/about.css"
import { faL, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Qualities from "./qualities";
import {
	faGithub,
	faLinkedinIn,
	faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
import about_profile from "../../data/about"
import lclogo from '../../images/leetcode-icon.png';
import hackerrank from '../../images/hackerrank-icon.png';

const Personal = () => (
            <Paper elevation={3} className='paper-comp personal-comp'>
                  <div className="title homepage-title">
                    {INFO.homepage.title}
                  </div>

                  <div className="subtitle homepage-subtitle">
                    {INFO.homepage.description}
                  </div>


            </Paper>

);

const Profiles = () => (

  <Paper elevation={3} className='paper-comp'>
    <Typography variant="h5" gutterBottom>
      Social Profiles
    </Typography>
    <div className="homepage-socials">
                <a
                  href={about_profile.user_socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="homepage-social-icon"
                  />
                </a>
                <a
                  href={about_profile.user_socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="homepage-social-icon"
                  />
                </a>

                <a href={about_profile.user_socials.leetcode}>
                   <img className="third-party-icon" src={lclogo} alt="Logo" />
                </a>
                <a href={about_profile.user_socials.hackerrank}>
                   <img className="third-party-icon" src={hackerrank} alt="Logo" />
                </a>
                
              </div>   
    </Paper>
);
const AboutMe = () => (
    <div>
        <Typography variant="h4" gutterBottom align="center">
            Welcome to My Profile
        </Typography>
        <Grid id="grid-container" container >
        <Box className="grid-item full-width">
          <Personal />
        </Box>
        <Box className="grid-item half-width" >
          <Qualities />
        </Box>
        <Box className="grid-item half-width" >
          <Profiles />
        </Box>
        </Grid>
        <br></br>
  </div>
);

export default AboutMe;
