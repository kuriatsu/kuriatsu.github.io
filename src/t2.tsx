import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';

import t2 from './images/t2.jpg'

function T2() {
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container columnSpacing={3} sx={{mt:15, alignItems:"center"}}>
          <Grid size={4}>
            <Box component="img" src={t2} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
          <Grid size={8}>
            <Typography variant="h2" align="left">
              <a href="https://t2.auto/">T2</a>
            </Typography>
            <Typography variant="h5" align="left">
              A startup company of automated driving truck
            </Typography>
            <Typography variant="body1" align="left">
              Deveoping automated driving truck, ecosystem and business of logistics based on the L4 truck. The strength of the company is the solid business model as well as software and hardware technology.
            </Typography>
          </Grid>
        </Grid>
        
        <Typography variant="h6" align="left" sx={{mt:6, mb:6}}>
          Full-time software engineer in planning team.    
        </Typography>

        <Typography variant="h3" align="left" sx={{mt:3, mb:3}}>
          Prediction component 
        </Typography>
        <Divider/>
        <Typography variant="h6" align="left">
          Planning team is in charge of calculating the trajectory of ego vehicle using perception, localization, and map data.
          Prediction forecasts the future behavior of surrounding vehicles (e.g., where objects will be and what actions they might take over a specific time horizon) using detected objects from perception module and contextual information. 
          Prediction is crucial for safe and efficient driving because it allows the autonomous vehicle to anticipate potential hazards, plan safe maneuvers, and make informed decisions. For example, the system might predict that a adjacent vehicle is about to change lane. These predictions help the vehicle adjust its speed, trajectory, and actions to avoid collisions and ensure smooth navigation.
        </Typography>

        <Typography variant="h3" align="left" sx={{mt:6}}>
          Validation 
        </Typography>
        <Divider/>
        <Typography variant="h6" align="left" sx={{mt:6, mb:6}}>
          I was also in charge of validating new features of planning module to deploy them to the real traffic. Based on the test requirement from design team, I plan experiment, conduct experiment with professional test drivers in JARI, and summarize the result to get the approval of deployment from PM.
        </Typography>

      </Container>
    </React.Fragment>
  );
}

export default T2;
