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
            <Typography variant="h4" component="h1" align='center' paddingTop="50px" gutterBottom>
            Technical Skills
            </Typography>
            <Box className="skills-table">
                <ResponsiveHoneycomb
                    defaultWidth={10}
                    size={70} 
                    items={mergeSkills(skill_sets)}
                    renderItem={([category,name,icon]) => (
                        <Hexagon className={'hex-grid '+category}
                        >
                            <Box display="flex"  className="container">
                            <Icon className='skill-icon' > {icon} </Icon>
                                <Typography variant="h7" textAlign="center"  className='skill-name'>
                                    {name}
                                </Typography>
                                
                            </Box>                        
                            
                        
                        </Hexagon>

                    )}
                    />
                    <Grid display={"flex"} className='skills-legend'>
                        <SkillsLegend color = "#5189b8" name = "Programming Languages"/> 
                        <SkillsLegend color = "#94ABE1" name = "Frameworks"/> 
                        <SkillsLegend color = "#E6F4F1" name = "Databases"/> 
                        <SkillsLegend color = "#EEE8A9" name = "Tools"/> 
                    </Grid>
                </Box>
        </div>
    );
}

export default Skills;
