import React from "react";

import {Dialog,DialogContent,DialogActions,DialogContentText,DialogTitle,Button ,
     List,ListItem, Card, CardContent, Typography } from '@mui/material';

import "./styles/allProjects.css";

const ProjectDetails = (props) => {
    const open = props.open;
    const setOpen = props.setOpen;
    const { logo, title, description, details, link } = props.project;

    const handleToClose = () => {
        setOpen(false);
    };
    let detailsUILIist = []
    details.forEach( (detail,index) => {
        detailsUILIist.push( <ListItem key={index} sx={{ display: 'list-item' }}>{detail}</ListItem>)
    });
	return (
        <Card>
            <CardContent>
                <Typography variant="h5"> {title}</Typography>
                <List sx={{
                listStyleType: 'disc',
                listStylePosition: 'inside'
                }}
                >
            {detailsUILIist}
    </List>

            </CardContent>
        </Card>
	);
};

export default ProjectDetails;
