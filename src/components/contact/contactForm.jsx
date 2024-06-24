import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import './styles/contact.css';
import emailjs from '@emailjs/browser';

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
        const templateParams = {
            user_email: formData.email,
            subject: formData.subject,
            message: formData.body,
        };
        // Handle form submission logic here
        emailjs
        .send('service_v6lsjgu', 'template_g81ylyf',  templateParams,'JhUAVOGr1JQ26HyUJ')
        .then(
          () => {
            alert('Mail sent!');
          },
          (error) => {
            alert('FAILED to send. Please try messaging through LinkedIn profile. Sorry for inconvenience', error.text);
          },
        );
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
