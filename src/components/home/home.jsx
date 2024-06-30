import React from "react";
import Typical from "react-typical";
import { Box, Container, Typography, Switch, Icon } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Parallax } from 'react-parallax';
import bgImage from "../../images/background-img.jpg"

function Home() {
  let sharedData = {
    name : "Kaushik Pattipati",
    titles : ["SOFTWARE DEVELOPER",3000,"GRADUATE STUDENT",3000,"LEARNER",1500]
    };

    
    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={sharedData["titles"]} loop={Infinity} />
    });

    return (


        <Container maxWidth={false}
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundImage:`url(${bgImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: 'fixed', 
            
          }}
          
        >

            <Typography variant="h4" sx={{ margin: '0.5em 0' }}>
              {sharedData["name"]}
            </Typography>
            <Typography variant="subtitle1" >
                <HeaderTitleTypeAnimation />
            </Typography>
        </Container>
    );
}

export default Home;
