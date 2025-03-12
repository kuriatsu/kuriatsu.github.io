import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Image from 'react-bootstrap/Image';
import Divider from '@mui/material/Divider';
import testimage from './images/javelin.png';

import logo from './images/brainiv_logo.png'
import ai_driving from './images/AIdriving.jpg'
import rosbag_to_carla from './images/rosbag_to_carla.mp4'

function BRAINIV() {
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container columnSpacing={3} sx={{mt:10, alignItems:"center"}}>
          <Grid size={2} align="center">
            <Box component="img" src={logo} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
          <Grid size={10}>
            <Typography variant="h2" align="left">
              <a href="https://www.brain4.jp">BRAIN IV</a>
            </Typography>
            <Typography variant="h5" align="left">
              Tech startup company that originated at Nagoya University, Takeda Lab.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" align="left" sx={{mt:5, mb:5}}>
           Part-time engineer at BrainIV for 4 years. I had worked on the following projects as engineer or leader.
        </Typography>


        <Typography variant="h3" align="left">
          AI Driving School
        </Typography>
        <Divider/>
        <Typography variant="h6" align="left" sx={{mt:3}}>
          I worked on AI driving school project as a engineering member. 
          AI driving school is a joint project between TierIV, which develops Autoware, and a Japanese driving school, and BrainIV was in charge of developing the evaluation system.
          AI driving school is a software that evaluates a driver's driving and provides feedback instead of an instructor.
          The evaluation system utilizes Autoware, an open-source automated driving system, to retrieve vehicle location, road information, and surrounding obstacle information to evaluate driving behavior. The system also uses the face information obtained from the driver camera to evaluate whether the driver is appropriately checking the surrounding situation. The evaluation criteria are based on Japanese driving instruction standards, and feedback is provided in real time through user interface stayed beside the cockpit.
          I was involved in the development of the evaluation system in cooperation with other engineers. The developed system has already been introduced at several driving schools for student's independent training in closed areas before obtaining a provisional license. 
        </Typography>
        <Box sx={{mt:3}}>
          <Box align="center">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/ZkMnFymhB2M" title="教官がいない…最先端の自動車学校に行ってみた！運転技術もAI仕込みの時代？" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Box>
          <Typography variant="body1" align="center" p={2}>
            TV show featuring the release of the project
          </Typography>
        </Box>

        <Typography variant="h3" align="left" sx={{mt:6}}>
          Driving Scene Reconstruction
        </Typography>
        <Divider/>
        <Typography variant="h6" align="left" sx={{mt:3, mb:3}}>
            The reconstruction system of the driving situation is part of a national project. This system is designed to test automated driving systems in actual driving conditions. Using driving data (Lidar, GNSS and camera data) and its obstacle recognition data, the system reconstructs the dynamics of other vehicles in a simulator environment (CARLA) and enables the automatied driving system to drive in it. I was the main developer of this system. The vehicle dynamics were based on the collected data and were reproduced using PythonAPI of CARLA simulator. The ego vehicle can be controlled by an external automated driving system independently of the driving data. Other vehicles have several functions, such as moving exactly according to the collected data or moving independently at arbitrary times, to achieve natural interactions with the ego vehicle. Maps are automatically obtained from the vehicle's GNSS trajectory. This enabled the system to automatically reproduce driving situations using driving data as input.
        </Typography>
        <Box sx={{mt:3}}>
          <video src={rosbag_to_carla} autoPlay loop muted style={{width: "80%"}}/>
          <Typography variant="body1" align="center" p={2}>
            Demo of driving scene reconstruction
          </Typography>
        </Box>

      </Container>
    </React.Fragment>
  );
}

export default BRAINIV;
