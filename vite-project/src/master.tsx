import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import {useState, useEffect} from "react";

import logo from './images/nagoya-univ_logo.png';
import lab_member from './images/takedalab.png';
import tshirt from './images/Tshirt.jpg';
import cp_diagram from './images/cp_diagram.png';
import robot_demo from './images/robot_demo.mp4';

function UPenn() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container columnSpacing={3} sx={{mt:12, alignItems:"center"}}>
          <Grid size={2} align="center">
            <Box component="img" src={logo} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
          <Grid size={10}>
            <Typography variant="h2" align="left">
              Master at Nagoya University
            </Typography>
            <Typography variant="h5" align="left">
              Graduate School of Informatics, Department of Intelligent Systems, Takeda Lab.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h3" align="left" sx={{mt: 6}}>
          About Takeda Lab.
        </Typography>
        <Divider/>
        <Typography variant="h6" align="left" sx={{mt: 3}}>
          Takeda Lab specializes in behavior signal processing, conducting research in variety of fields, including sound processing, automated driving, human-machine interaction, and sports analysis.
          Despite the diversity of these research areas, they are all interconnected through the common theme of <b>behavior signal processing</b>. Students with different research interests actively engage in discussions and collaborate on their research daily. 
          The laboratory is also highly international, with many international students from conutries such as Egypt, Thailand, Canada, India, China, the Philippines, Turkey, Spain, Norway, and Finland. Student interactions are vibrant, providing an environment where researchers from diverse backgrounds can learn from one another and deepen their research.
        </Typography>
        <Grid container direction="row" columnSpacing={2} sx={{mt:3}}>
          <Grid size={7.43}>
            <Box component="img" src={lab_member} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" p={2}>
              Lab mates, professors, Research assistants
            </Typography>
          </Grid>
          <Grid size={4.57}>
            <Box component="img" src={tshirt} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" p={2}>
              Snapshot of graduation party
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h3" align="left" sx={{mt:6}}>
          Research
        </Typography>
        <Divider/>
        <Typography variant="h6" align="left" sx={{mt:3}}>
          My research theme during the master degree focused on <b> user interface for human intervention in the perception of automated driving system </b>. This is a novel approach as an alternative to conventional control takeover method, sharing internal perception state with human operator and allowing the human operator to check and correct mistakes in the perception errors. By intervening at an early stage of automated driving system, this approach aims to stabilize the driving behavior while human interventions.
        </Typography>

        <Box sx={{mt:3}}>
          <Box component="img" src={cp_diagram} sx={{width:"70%", borderRadius:3}}/>
          <Typography variant="body1" align="center" p={2}>
            Diagram of "intervention in the perception of automated driving system"
          </Typography>
        </Box>
        <Typography variant="h6" align="left" sx={{mt: 3}}>
          My research primarily focused on verifying technical feasibility. I conducted both demonstrations using a small mobile robot and subject experiments in a simulation environment. For the small mobile robot experiment, I implemented a prototype user interface using Autoware, demonstrating that human intervention is possible at the perception stage of the automated systems. The subject experiments were conducted using CARLA, an open-source simulator, where I integrated Autoware and the user interface. By involving participants in driving evaluations, I assessed the driving behavior during human intervention.
        </Typography>
        <Box sx={{mt: 3}}>
          <video src={robot_demo} autoPlay loop muted style={{width: "90%", height: "auto"}}/>
          <Typography variant="body1" align="center" p={2}>
            Student teams developing automated driving using go cart vehicles and Autoware
          </Typography>
        </Box>

      </Container>
    </React.Fragment>
  );
}
export default UPenn;
