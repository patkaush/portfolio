import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Card from './card';
export default function DescriptionDrawer({workDetails}) {
  // const [open, setOpen] = React.useState(false);

  // const toggleDrawer = (newOpen) => () => {
  //   setOpen(newOpen);
  // }; 
  let details = workDetails.description;
  console.log(workDetails.description)
  let detailsUILIist = [];
  details.forEach( (detail,index) => {
      detailsUILIist.push( <ListItem key={index} sx={{ display: 'list-item' }}>{detail}</ListItem>)
  });

  return (
    <Box
      sx={{ width: 500 }}
      role="presentation"
    >
      <h2>{workDetails.position}</h2>
      <h3>{workDetails.company_name}</h3>
      <List sx={{
                  listStyleType: 'disc',
                  listStylePosition: 'inside'
              }}
              >
              {detailsUILIist}
      </List>
    </Box>
  );
}