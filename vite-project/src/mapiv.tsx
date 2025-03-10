import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Image from 'react-bootstrap/Image';
import Divider from '@mui/material/Divider';

import map_iv from './images/mapIV.jpg'
import map_iv_map from './images/mapIV_vectormap.png'

function MAPIV() {
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container columnSpacing={3} sx={{mt:15, alignItems:"center"}}>
          <Grid size={4} align="center">
            <Box component="img" src={map_iv} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
          <Grid size={8}>
            <Typography variant="h2" align="left">
              <a href="https://www.map4.jp">MAP IV</a>
            </Typography>
            <Typography variant="h5" align="left">
              Tech startup company that originated at Nagoya University
            </Typography>
            <Typography variant="body1" align="left">
              MAP IV is an software powered company working for 3D map, HDMap, localization software, and hardware stack for localization and mapping. 
            </Typography>
          </Grid>
        </Grid>
        
        <Typography variant="h6" align="left" sx={{mt:6, mb:6}}>
          Part-time engineer at MAP IV. I worked at 3D spatial data team. This team integrate technology developed in the other team and creates high quality HDMap and 3D map model. Our engineering goal is developing automation tools, map creation tools with sophisticated UI with highly experienced labeling members. 
        </Typography>

        <Typography variant="h3" align="left">
          Automation Tools for 3D Map Creation
        </Typography>
        <Divider/>
        <Typography variant="h6" align="left" sx={{mt:3, mb:3}}>
           Optimized redundant workflow in managing tasks of the 3D map modeling and quality assessment tasks. The project included a investigation of the entire 3D modeling workflow, development of python scripts to extract and organize modeling data (PCD), and development of Blender extensions to perform quality assessment. 
        </Typography>

        <Typography variant="h3" align="left" sx={{mt:6}}>
          HD Map
        </Typography>
        <Divider/>
        <Grid container columnSpacing={3} sx={{mt:3, mb:3}}>
          <Grid size={7}>
            <Typography variant="h6" align="left">
              Added supported objects the map can represent. In addition to adding functions, I carried out a complete flow of software development in industry, including implementation of test scripts using ctest and pytest, format organization using clang and black, and automated evaluation on github CI/CD.
            </Typography>
          </Grid>
          <Grid size={5} align="center">
            <Box component="img" src={map_iv_map} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
        </Grid>

      </Container>
    </React.Fragment>
  );
}

export default MAPIV;
