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
                <strong>LinkedIn:</strong> <Link href="https://www.linkedin.com/in/kaushik-pattipati/">Kaushik Pattipati</Link>
            </Typography>
            <Typography variant="body1">
                <strong>Email:</strong> example@example.com
            </Typography>
            
        </div>
    );
};

export default ContactDetails;
