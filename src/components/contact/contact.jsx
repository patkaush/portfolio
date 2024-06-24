import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Divider } from '@mui/material';
import './styles/contact.css';
import ContactDetails from './contactDetails';
import ContactForm from './contactForm';

const Contact = () => {


    return (
        <div id="contact_section">
            <Typography variant="h3" style={{textAlign : "center"}} > Contact</Typography>
        <Box     
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 2,
                padding: 2,
            }}>

            <Box className="contact-details-container">
                <ContactDetails />
            </Box>
            <Divider orientation="vertical" flexItem style={{ border: "1px solid black" }} />
            <Box>
                <ContactForm />
            </Box>
        </Box>

        </div>
    );
};

export default Contact;
