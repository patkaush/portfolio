import React from "react";
import Typical from "react-typical";
import { Container, Typography, } from '@mui/material';
import bgImage from "../../images/landing-page.svg"

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
            <Typography variant="titles">
              Hi, I am 
            </Typography>
            <Typography variant="h2" >
              {sharedData["name"]}
            </Typography>
            <Typography variant="boldText" >
                <HeaderTitleTypeAnimation />
            </Typography>
        </Container>
    );
}

export default Home;
