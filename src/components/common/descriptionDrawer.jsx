import * as React from 'react';
import { Drawer,Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import "./styles/descriptionDrawer.css"
import Divider from '@mui/material/Divider';
import skill_sets from '../../data/skills';
import SkillsPresentation from '../skills/skillsPresentation';
import {mergeSkills,HoneyCombGrid} from '../common/HoneyCombGrid';

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
      detailsUILIist.push( <ListItem key={index} sx={{ display: 'list-item' }}><Typography variant="h7">{detail}</Typography></ListItem>)
  });

  return (

        <Grid container className='description-container'>

                  <Grid item xs={12}>
                    <Typography variant="h4" className='work-content-heading'>Description</Typography>
                    {detailsUILIist}
                  </Grid>

                  <Grid item xs={12}>

                    <Typography variant="h4" className='work-content-heading'>Tech Stack</Typography>
                    <HoneyCombGrid skills = {mergeSkills(tech_stack)}/>


                  </Grid>
        </Grid>
  );
}