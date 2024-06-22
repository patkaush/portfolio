import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import skill_sets from '../../data/skills';
import SkillsPresentation from './skillsPresentation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SvgIcon from '@mui/material/SvgIcon';

function Skills( ) {
    
    return (

        <div >
            <Typography variant="h4" component="h1" align='center' paddingTop="50px" gutterBottom>
            Technical Skills
            </Typography>
            <SkillsPresentation title = "Programming Languages" skills = {skill_sets["languages"]} />
            <SkillsPresentation title = "Frameworks" skills = {skill_sets["frameworks"]} />
            <SkillsPresentation title = "Databases" skills = {skill_sets["databases"]} />
            <SkillsPresentation title = "Tools" skills = {skill_sets["tools"]} />

        </div>
    );
}

export default Skills;
