import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import { Grid } from '@mui/material';


import "./styles/education.css";

const EducationCard = (props) => {
    let profile = props.profile;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
    return (
		<div   >
    
            <div className="education-profile-container">
                <Card  variant="outlined" sx={{ marginBottom: 2 }}>
                <CardContent>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item xs={9}>
                        <Typography variant="h5" component="div">
                            {profile.position}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {profile.institution_name}
                        </Typography>
                    </Grid>
                    <Grid item xs={3} textAlign="right">
                        <Typography variant="body2">
                            {profile.data_of_ending} | GPA: {profile.cgpa}
                        </Typography>
                        <CardActions disableSpacing  sx={{ justifyContent: 'flex-end' }}>
                            <Button  onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                            {expanded ? "Hide Details" : "Read more"}
                            </Button>
                        </CardActions>
                    </Grid>

                </Grid>                    
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography variant="h6" component="div">Relevant Coursework:</Typography>
                    <Typography paragraph>{profile.relevant_courseWork.join(", ")}</Typography>
                    </CardContent>
                </Collapse>
                </Card>
            </div>
    </div>
	);
};

export default EducationCard;
