import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Image from 'react-bootstrap/Image';
import testimage from './images/javelin.png';

import map_iv from './images/mapIV.jpg'
import map_iv_map from './images/mapIV_vectormap.png'

function Master() {
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box container sx={{mt:10, mb:10}}>
          <Box size={8}>
            <Typography variant="h2" align="left">
              MAP IV
            </Typography>
            <Typography variant="h4" align="left">
              Tech startup company that originated at Nagoya University.
            </Typography>
          </Box>
          <Box size={8}>
            <Box component="img" src={map_iv} sx={{width:"99%", borderRadius:3}}/>
          </Box>
        </Box>
        <Stack>
          <Typography variant="body1" align="left">
            Part-time engineer at MAP IV. MAP IV is an software powered company working for 3D map, HDMap, localization software, and hardware stack for localization and mapping. The main custromers are roboticcs company for navigation and manufacturing, transportation company for warehouse maintainance. 
          </Typography>
          <Typography variant="body1" align="left">
            I worked at 3D spatial data team. This team integrate technology developed in the other team and creates high quality HDMap and 3D map model. Our engineering goal is developing automation tools, map creation tools with sophisticated UI with highly experienced labeling members. I worked on two projects; assist tools for 3D map model creation and HD map (intermediate format featuring comprehensive and detailed definition or road elements). 
            "3D map model creation" optimizes redundant workflow in managing tasks of the 3D map modeling and quality assessment tasks. The project included a investigation of the entire 3D modeling workflow, development of python scripts to extract and organize modeling data (PCD), and development of Blender extensions to perform quality assessment. 
            "HD map" is adding supported objects the map can represent. In addition to adding functions, I carried out a complete flow of software development in industry, including implementation of test scripts using ctest and pytest, format organization using clang and black, and automated evaluation on github CI/CD. 
          </Typography>

        </Stack>
      </Container>
    </React.Fragment>
  );
}

export default Master;
