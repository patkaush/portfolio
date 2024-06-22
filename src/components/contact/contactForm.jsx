import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import './styles/contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        body: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <Box className="contact-form-container">
            <Typography variant="h4" gutterBottom>
                Drop an Email
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Subject"
                    variant="outlined"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Body"
                    variant="outlined"
                    name="body"
                    value={formData.body}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                />
                <Button variant="contained" color="primary" type="submit" fullWidth>
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default ContactForm;
