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
import HoneyCombGrid from '../common/HoneyCombGrid';


let SkillsLegend = ({color,name}) =>{
    return (
        <Grid item xs={3} className='grid-item'>
            <Stack direction="row" display={"flex"}>
                <CircleIcon style={{ color ,marginRight : "5px" }} />
                <Typography >{name}</Typography>
            </Stack>
        </Grid>

    )
};
function mergeSkills(skillsets){
    let skills = [];
    for (var key in skillsets){
        for (var value in skillsets[key]){
            console.log(skillsets[key][value]);
            skills.push([key,value,skillsets[key][value]]);
        }
    }
    return skills;
}

function Skills( ) {
    return (

        <div className='skills-container'>
      <Typography variant="h2"  align="center" className='section-title' style={{color:' var(--primary-color) '}}>Technical Skills</Typography>

            <Box className="skills-table">
                    <HoneyCombGrid skills={mergeSkills(skill_sets)}/>

                    <Grid display={"flex"} className='skills-legend'>
                        <SkillsLegend color = " var(--primary-color) " name = "Programming Languages"/> 
                        <SkillsLegend color = "var(--quaternary-color)" name = "Frameworks"/> 
                        <SkillsLegend color = "var(--tertiary-color)" name = "Databases"/> 
                        <SkillsLegend color = "var(--secondary-color)" name = "Tools"/> 
                    </Grid>
                </Box>
        </div>
    );
}

export default Skills;
