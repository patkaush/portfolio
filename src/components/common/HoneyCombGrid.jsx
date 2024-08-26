import { Box, Icon, Typography } from '@mui/material';
import React from 'react';
import { ResponsiveHoneycomb, Hexagon } from 'react-honeycomb';

//Only for representing skills
export function mergeSkills(skillsets){
    let skills = [];
    for (var key in skillsets){
        for (var value in skillsets[key]){
            console.log(skillsets[key][value]);
            skills.push([key,value,skillsets[key][value]]);
        }
    }
    return skills;
}

export function HoneyCombGrid({skills,func = null}) {
    let size = 70;
    if (func != null){
        size = 50;
    }
    console.log(func)
    return (
        <ResponsiveHoneycomb
        defaultWidth={10}
        size={size} 
        items={skills}
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
    );


}
