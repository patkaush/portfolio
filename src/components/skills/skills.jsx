import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import skill_sets from '../../data/skills';
import SkillsPresentation from './skillsPresentation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SvgIcon from '@mui/material/SvgIcon';
import "./styles/skills.css"
import { ResponsiveHoneycomb, Hexagon } from 'react-honeycomb';
import { Grid, Icon, Stack } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import {mergeSkills,HoneyCombGrid} from '../common/HoneyCombGrid';


let SkillsLegend = ({color,name}) =>{
    return (
        <Grid item xs={3} className='grid-item'>
            <Stack direction="row" display={"flex"}>
                <CircleIcon style={{ color ,marginRight : "5px" }} />
                <Typography variant="boldText">{name}</Typography>
            </Stack>
        </Grid>

    )
};


function Skills( ) {
    return (

        <div className='skills-container'>
      <Typography variant="h1"  className='section-title' style={{color:' var(--primary-color) '}}>Technical Skills</Typography>

            <Box className="skills-table">
                    <HoneyCombGrid skills={mergeSkills(skill_sets)}/>

                    <Grid display={"flex"} className='skills-legend'>
                        <SkillsLegend color = " #ffb897 " name = "Programming Languages"/> 
                        <SkillsLegend color = "#ffd1a3" name = "Frameworks"/> 
                        <SkillsLegend color = "#fce4c0" name = "Databases"/> 
                        <SkillsLegend color = "#f3f1e5" name = "Tools"/> 
                    </Grid>
                </Box>
        </div>
    );
}

export default Skills;
