import * as React from 'react';
import { Drawer,Box, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import "./styles/descriptionDrawer.css"
import Divider from '@mui/material/Divider';
import skill_sets from '../../data/skills';
import {mergeSkills,HoneyCombGrid} from '../common/HoneyCombGrid';

export default function DescriptionDrawer({workDetails}) {
  let details = workDetails.description;
  let tech_stack = workDetails.tech_stack;
  console.log(tech_stack)
  let detailsUILIist = [];
  details.forEach( (detail,index) => {
      detailsUILIist.push( <ListItem key={index} sx={{ display: 'list-item' }}><Typography variant="paragraph">{detail}</Typography></ListItem>)
  });

  return (

        <Grid container className='description-container'>

                  <Grid item xs={12}>
                    <Typography variant="subheading" className='work-content-heading'>Description</Typography>
                    {detailsUILIist}
                  </Grid>

                  <Grid item xs={12}>

                    <Typography variant="subheading" className='work-content-heading'>Skills Acquired</Typography>
                    <HoneyCombGrid skills = {mergeSkills(tech_stack)} func = "work_profile"/>


                  </Grid>
        </Grid>
  );
}