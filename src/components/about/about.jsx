import React from 'react';
import { Grid, Paper, Typography,Box, Icon } from '@mui/material';
import INFO from "../../data/user";
import "./styles/about.css"
import { faL, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Qualities from "./qualities";
import Tooltip from '@mui/material/Tooltip';

import {
	faGithub,
	faLinkedinIn,
	faStackOverflow
} from "@fortawesome/free-brands-svg-icons";
import about_profile from "../../data/about"
import lclogo from '../../images/leetcode-svgrepo-com.svg';
import hackerrank from '../../images/hackerrank-svgrepo-com.svg';

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
                <Tooltip title="Github Profile">
                    <a
                    href={about_profile.user_socials.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon
                      fontSize='large'
                      className="homepage-social-icon"
                    />
                  </a>
                </Tooltip>                
                <Tooltip title="LinkedIn Profile">
                  <a
                    href={about_profile.user_socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon
                      fontSize='large'
                      className="homepage-social-icon"
                    />
                  </a>
                </Tooltip>
                <Tooltip title="Leetcode Profile">
                <a href={about_profile.user_socials.leetcode}
                    target="_blank"
                    rel="noreferrer"
                >
                  <Icon fontSize='large'>
                   <img className="third-party-icon" src={lclogo} alt="Logo" />
                   </Icon>
                </a>
                </Tooltip>
                <Tooltip title="HackerRank Profile">
                <a href={about_profile.user_socials.hackerrank}
                    target="_blank"
                    rel="noreferrer"
                >
                <Icon fontSize='large'>
                   <img className="third-party-icon" src={hackerrank} alt="Logo" />
                   </Icon>
                </a>
                </Tooltip>                
              </div>   
    </Paper>
);
const AboutMe = () => (
    <div>
        <Typography variant="h4" gutterBottom align="center">
            About me
        </Typography>
        <Grid id="grid-container" container >
          <Grid item className="grid-item full-width">
            <Personal />
          </Grid>
          <Grid item className="grid-item half-width" >
            <Qualities />
          </Grid>
          <Grid item className="grid-item half-width" >
            <Profiles />
          </Grid>
        </Grid>
  </div>
);

export default AboutMe;
