import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
// import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';

// keyboard
import moire1 from './images/moire1.jpg';
import moire2 from './images/moire2.jpg';
import tsubasa1 from './images/tsubasa1.jpg';
import tsubasa2 from './images/tsubasa2.jpg';
import cdd from './images/CDD.jpg';
// hdmap editor
import hdmap from './images/rviz_window.png';
// repairment
import mouse from './images/mouse.jpg';
import thinkpad from './images/thinkpad_reg.jpg';

function Project() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{mt:15, mb:10}} align="left">
          Personal Projects
        </Typography>

        <Typography variant="h4" align="left">
          Hardware Projects
        </Typography>
        <Divider/>
        <Grid container columnSpacing={3} rowSpacing={3} sx={{justifyContent: "center", mt:3}}>
          <Grid>
            <Card sx={{display: 'flex', width: 240, height: 330}}>
              <CardActionArea href='#/project/keyboard'>
                <CardMedia component="img" sx={{height:150}} image={moire1}/>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Mechanical Keyboard
                  </Typography>
                  <Typography variant="body2" align="left">
                    I'm designing my dream keyboard
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid>
            <Card sx={{display: 'flex', width: 240, height: 330}}>
              <CardActionArea href='#/project/mouse'>
                <CardMedia component="img" sx={{height:150}} image={mouse}/>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Custom Mouse 
                  </Typography>
                  <Typography variant="body2" align="left">
                    I'm designing my dream mouse
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid>
            <Card sx={{display: 'flex', width: 240, height: 330}}>
              <CardActionArea href='#/project/repair'>
                <CardMedia component="img" sx={{height:150}} image={thinkpad}/>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Repairment parts 
                  </Typography>
                  <Typography variant="body2" align="left">
                    Repairs broken parts and creates original products using 3D printer (both FFF and SLA).
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        </Grid>

        <Typography variant="h4" sx={{mt:10}} align="left">
          Software Projects
        </Typography>
        <Divider/>
        <Grid container columnSpacing={3} rowSpacing={3} sx={{justifyContent: "center", mt:3, mb:10}}>
          <Grid>
            <Card sx={{display: 'flex', width: 240, height: 330}}>
              <CardActionArea href="https://github.com/kuriatsu/rviz_hdmap_editor">
                <CardMedia component="img" sx={{height:150}} image={hdmap}/>
                <CardContent>
                  <Typography variant="h6" align="center">
                    HDMap Editor 
                  </Typography>
                  <Typography variant="body2" align="left">
                    HDMap (maps) and Waypoint (vehicle paths) editor on RViz.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid>
            <Card sx={{display: 'flex', width: 240, height: 330}}>
              <CardActionArea href="https://github.com/kuriatsu/carla-scenario">
                <CardMedia component="img" sx={{height:150}} image="https://user-images.githubusercontent.com/38074802/195296981-5ac8c0a4-b225-43a9-8c57-ed863bca9c3f.gif"/>
                <CardContent>
                  <Typography variant="h6" align="center">
                    Driving Scenario Editor
                  </Typography>
                  <Typography variant="body2" align="left">
                    An xml wrapper of CARLA PythonAPI, defines the position of vehicles, travel routes, and the trigger of firing their motion. Run scenario, action presets, and visualization tools.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid>
            <Card sx={{display: 'flex', width: 240, height: 330}}>
              <CardActionArea href="https://github.com/kuriatsu/ros-g29-force-feedback">
                <CardMedia component="img" sx={{height:150}} image="https://github.com/kuriatsu/ros-g29-force-feedback/raw/image/images/force_feedback_test.gif"/>
                <CardContent>
                  <Typography variant="h6" align="center">
                    G29 ROS control 
                  </Typography>
                  <Typography variant="body2" align="left">
                    Control G29 and G923 wheel using FF functionality.  
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </React.Fragment>
  );
}

function Keyboard() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h2" align="left" sx={{mt:15, mb:10}}>
          Mechanical Keyboard
        </Typography>
        <Grid container columnSpacing={1}>
          <Grid size={4}>
            <Box component="img" src={tsubasa1} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
          <Grid size={4}>
            <Box component="img" src={tsubasa2} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
          <Grid size={4}>
            <Box component="img" src={moire1} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
          <Grid size={4}>
            <Box component="img" src={moire2} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
          <Grid size={4}>
            <Box component="img" src={cdd} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
        </Grid>
        <Typography variant="h6" align="left" sx={{mt:3}}>
          I am designing the ideal keyboard.
          Features,
          <ul>
            <li>A new layout that provides a natural home position and reduced fingering</li>
            <li>Key mapping optimized for Vim use</li>
            <li>Split design to reduce the physical workload</li>
            <li>Symmetrical key layout as a result of pursuit of functionality and aesthetically pleasing appearance as a side effect</li>
          </ul>
          PCB was designed from scratch by CAD and ordered to JLCPCB.
          The case was designed by CAD and produced by my own 3D printer.
          The firmware is based on QMK.

          Various devices such as rotary encoder, trackball, LCD, etc. are embedded and tested. I'm planing to work on packaging design aiming to make it in production.
        </Typography>
      </Container>
    </React.Fragment>
  );
}

function Mouse() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
      </Container>
    </React.Fragment>
  );
}

function Repair() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
      </Container>
    </React.Fragment>
  );
}

export default {Project, Keyboard, Mouse, Repair}
