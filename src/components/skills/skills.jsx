import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import skill_sets from '../../data/skills';
function Skills( ) {
    
    return (
        <div >
            <h1>Technical Skills</h1>
            <Box sx={{ width: '100%', bgcolor: 'background.paper', p: 2 }}>
                {Object.entries(skill_sets).map(([category, items], index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}:
                        </Typography>
                        <Typography variant="body1" component="span">
                            {items.join(', ')}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default Skills;
