import * as React from 'react';
import { Drawer,Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import "./styles/descriptionDrawer.css"
import Divider from '@mui/material/Divider';
import skill_sets from '../../data/skills';
import SkillsPresentation from '../skills/skillsPresentation';

export default function DescriptionDrawer({workDetails}) {
  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen) => () => {
  //   setOpen(newOpen);
  // }; 
  let details = workDetails.description;
  let tech_stack = workDetails.tech_stack;
  console.log(tech_stack)
  let detailsUILIist = [];
  details.forEach( (detail,index) => {
      detailsUILIist.push( <ListItem key={index} sx={{ display: 'list-item' }}>{detail}</ListItem>)
  });

  return (
    <Box role="presentation"  className = "drawer-container">

        <Grid container spacing={2} className='description-container'>

                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Description</Typography>
                    {detailsUILIist}
                  </Grid>
                  <Divider orientation="vertical" flexItem />

                  <Grid item xs={4}>
                    <Typography variant="subtitle1">Tech Stack</Typography>
                    <SkillsPresentation title = "Programming Languages" skills = {tech_stack["languages"]} />
                    <SkillsPresentation title = "Frameworks" skills = {tech_stack["frameworks"]} />
                    <SkillsPresentation title = "Databases" skills = {tech_stack["databases"]} />
                    <SkillsPresentation title = "Tools" skills = {tech_stack["tools"]} />

                  </Grid>
                </Grid>
      </Box>
  );
}