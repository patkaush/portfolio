import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import about_profile from "../../data/about"
import {  Icon, Paper, Tooltip, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button } from 'react-scroll';
import "./styles/qualities.css"
let Qualities = () => {

    let handleClick = (quality,description) => {
        setFlip(!flip);
        setQuality([quality,description]);
     
    }
    const [flip, setFlip] = useState(false);
    let [quality,setQuality] = useState(false);
    return (
    <ReactCardFlip isFlipped={flip} >
        <Paper elevation={3} className='paper-comp'>
                
            <Typography variant="body1">
                <Typography variant="h5" gutterBottom>
                    My top 5 Qualities
                </Typography>
                <ul>
                    {
                    Object.entries(about_profile["qualities"]).map( ([quality,description]) =>
                    <Tooltip title = "Click to know more">
                    <li key={quality} className="quality-item" onClick={() => handleClick(quality,description)}>{quality}</li>
                    </Tooltip>
                    
                    )}
                </ul>

            </Typography>


        </Paper>
        <Paper elevation={3} className='paper-comp'>
            <Typography variant="body1">
                <Typography variant="h5" gutterBottom>
                    <a className="back-button"onClick={() => setFlip(!flip)}>{<ArrowBackIcon />}</a> 
                     <span>   {quality[0]}</span>
                    </Typography>

                        {quality[1]}
                </Typography>

        </Paper>

    </ReactCardFlip>


    )
}
export default Qualities;