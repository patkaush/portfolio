import React from 'react';
import { Grid, Paper, Typography,Box, Icon, Stack } from '@mui/material';
import INFO from "../../data/user";
import "./styles/about.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Qualities from "./qualities";
import Tooltip from '@mui/material/Tooltip';

import about_profile from "../../data/about"
import lclogo from '../../images/leetcode-svgrepo-com.svg';
import hackerrank from '../../images/hackerrank-svgrepo-com.svg';
import { styled } from '@mui/system';



const HighlightedText = ({ text, keywords }) => {
  const parts = text.split(new RegExp(`(${keywords.join('|')})`, 'gi'));
  return (
    <Typography variant="paragraph"  style={{color:' var(--font-color) '}}>
      {parts.map((part, index) => 
        keywords.includes(part.toLowerCase()) ? (
          <Typography key={index} color={"var(--primary-color)"} variant ="boldText"> {part}</Typography>
        ) : (
          part
        )
      )}
    </Typography>
  );
};
const Personal = () => (
     
    <div className="personal-description">
      {about_profile.user_details.description.map((text, index) => (
        <>
        <HighlightedText key={index} text={text} keywords={about_profile.user_details.keywords} /> 
        <br/><br/>
        </>
        
      ))}


    </div>


);

const Profiles = () => (

  <Paper elevation={3} className='profiles-container'>
    <Typography variant="subheading" gutterBottom>
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
                <Icon fontSize='large' color='blue' >
                   <img className="third-party-icon" src={hackerrank} alt="Logo" />
                   </Icon>
                </a>
                </Tooltip>                
              </div>   
    </Paper>
);
const AboutMe = () => (
    <Grid  id='aboutme-container' >
      <Grid xs={12} >
        <Typography variant="h1"  className='section-title' style={{color:' var(--primary-color) '}}>
            About me
        </Typography>
        </Grid>
        <Grid xs = {12}> <Personal /></Grid>
      <Grid xs = {12}>
        <Grid id="qualities-profiles-container" container  >
          <Grid class="item"> <Qualities /> </Grid>
          <Grid class="item" > <Profiles /> </Grid>
        </Grid>
      </Grid>
        
  </Grid>
);

export default AboutMe;
