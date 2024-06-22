import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './styles/contactDetails.css';

const ContactDetails = () => {
    return (
        <div>
            <Typography variant="h4" >
                Contact Details
            </Typography>
            <Typography variant="body1">
                <strong>LinkedIn:</strong> <Link href="https://www.linkedin.com/in/your-profile" target="_blank">Your LinkedIn Profile</Link>
            </Typography>
            <Typography variant="body1">
                <strong>Email:</strong> example@example.com
            </Typography>
            <Typography variant="body1">
                <strong>Phone:</strong> (123) 456-7890
            </Typography>
        </div>
    );
};

export default ContactDetails;
