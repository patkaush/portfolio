import React from 'react';
import { Paper,Box, Container, Typography, Grid, Avatar, Icon, Stack} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';
import "./styles/skillsPresentation.css"
import Divider from '@mui/material/Divider';

const SkillsPresentation = (props) => {
    let title = props.title
    let skills = props.skills
    if (Object.keys(skills).length == 0){
        return (<></>);
    }
  return (
      <Box textAlign="center" my={3} className="skills-content">
        <Divider className = "skill-divider">
        <Typography variant="h5" gutterBottom className='skills-title'>
          {title}
        </Typography>


        </Divider>
        <Grid container spacing={4} justifyContent="center">
            {Object.entries(skills).map( ([name,icon]) => 
            <Grid item>
            <Paper elevation={3} className='skill-button'>
                <Box display="flex" textAlign="center">
                    <Typography variant="h7"  className='skill-name'>
                        {name}              
                    </Typography>
                    <Icon fontSize="large" className='skill-icon'>
                        {icon}
                    </Icon>
                </Box>
                </Paper>
            </Grid> 
        )}
        </Grid>
      </Box>
  );
};

export default SkillsPresentation;
