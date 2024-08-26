import React, { useState } from 'react';
import { Box,  Typography} from '@mui/material';
import './styles/contact.css';
import ContactDetails from './contactDetails';

const Contact = () => {


    return (
        <div id="contact_section">
		<Typography variant="h1" className='section-title' style={{color:' var(--primary-color) '}}>Contact</Typography>
        <Box
        sx ={{
            padding: 2,
            height:"500px",
            alignItems: "center"

        }}className="contact-details-container">
                <ContactDetails />
            </Box>
        </div>
    );
};

export default Contact;
