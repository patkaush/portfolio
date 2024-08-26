import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import './styles/contactDetails.css';

const ContactDetails = () => {
    return (
        <div>
            <Stack align='center'>
            <Typography variant="subheading"  >
                Please feel free to reach out via my LinkedIn profile.            
            </Typography>
            <Typography variant="subtitles" align='center'>
                <strong>LinkedIn:</strong> <Link href="https://www.linkedin.com/in/kaushik-pattipati/">Kaushik Pattipati</Link>
            </Typography>
            </Stack>
            
        </div>
    );
};

export default ContactDetails;
