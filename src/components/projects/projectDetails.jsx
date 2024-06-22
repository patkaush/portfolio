import React from "react";

import {Dialog,DialogContent,DialogActions,DialogContentText,DialogTitle,Button , List,ListItem } from '@mui/material';

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
		<div className="all-projects-container">
            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{title}</DialogTitle>

                <DialogContent>
                <List sx={{
                            listStyleType: 'disc',
                            listStylePosition: 'inside'
                        }}
                        >
                        {detailsUILIist}
                </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToClose}
                        color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
	);
};

export default ProjectDetails;
