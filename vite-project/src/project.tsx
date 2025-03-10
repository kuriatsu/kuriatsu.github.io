import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

// keyboard
import moire1 from './images/moire1.jpg';
import moire2 from './images/moire2.jpg';
import tsubasa1 from './images/tsubasa1.jpg';
import tsubasa2 from './images/tsubasa2.jpg';
import cdd from './images/CDD.jpg';
// hdmap editor
import hdmap from './images/rviz_window.png';
// carla scenario
import carla_scenario from './images/carla_scenario_checker.mp4';
// repairment
import mouse from './images/mouse.jpg';
import thinkpad from './images/thinkpad_reg.jpg';
import tshirt from './images/Tshirt.jpg';

function Project() {
  const KeyboardContent = (
    <Container maxWidth="lg">
      <Typography variant="h4">
        Mechanical Keyboard
      </Typography>
      <Typography variant="body1">
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
  );
  const HDMapContent = (
    <Container maxWidth="lg">
      <Typography variant="h4">
        HDMap editor
      </Typography>
      <Typography variant="body1">
          A tool to edit HDMap (maps) and Waypoint (vehicle paths) used in automated driving with Reviz in ROS. Developed for fine-tuning on site during demonstrations. Developed based on InteractiveMarker and Qt.
      </Typography>
    </Container>
  );
  const CarlaContent = (
    <Container maxWidth="lg">
      <Typography variant="h4">
        Driving scenario creation tool
      </Typography>
      <Typography variant="body1">
          A driving scenario creation tool for defining arbitrary behaviors of surrounding vehicles and pedestrians for automated driving experiments in the Carla simulator. In short, this is an xml wrapper for Carla PythonAPI. Conventionally, it was necessary to create driving scenarios using PythonAPI or ScenarioRunner provided by Carla, and it was difficult to create a large number of scenarios on one's own. By simply defining the position of other vehicles, their travel routes, and the timing of firing their movement in interpretable xml, driving scenarios can be easily created and executed. A variety of action modes and visualization tools were also created.
      </Typography>
    </Container>
  );

  const PrinterContent = (
    <Container maxWidth="lg">
      <Typography variant="h4">
        Enjoy 3D printing!
      </Typography>
      <Typography variant="body1">
        Repairs broken parts and creates original products using 3D printer (both FFF and SLA).
      </Typography>
    </Container>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ p:2, flexgrow: 1 }}>
          <div className="mt-3"/>
          <Typography variant="h3">Personal Projects</Typography>
        </Box>
        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'flex', md: 'none'}}} >
          <Stack spacing={2}>
              <Carousel>
                <Carousel.Item>
                  <Image src={moire1} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={moire2} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={tsubasa1} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={tsubasa2} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={cdd} fluid />
                </Carousel.Item>
              </Carousel>
              {KeyboardContent}
          </Stack>
        </Box>
        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'none', md: 'flex'}}} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={moire1} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={moire2} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={tsubasa1} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={tsubasa2} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={cdd} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
            <Grid size={6}>
              {KeyboardContent}
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'flex', md: 'none'}}} >
          <Stack spacing={2}>
              <Carousel>
                <Carousel.Item>
                  <Image src={hdmap} fluid />
                </Carousel.Item>
              </Carousel>
              {HDMapContent}
          </Stack>
        </Box>
        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'none', md: 'flex'}}} >
          <Grid container spacing={2}>
            <Grid size={6}>
              {HDMapContent}
            </Grid>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={hdmap} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'flex', md: 'none'}}} >
          <Stack spacing={2}>
            <video src={carla_scenario} autoPlay loop muted style={{width: 750, height: "auto"}}/>
            {CarlaContent}
          </Stack>
        </Box>
        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'none', md: 'flex'}}} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg:'none' } }}>
                <video src={carla_scenario} autoPlay loop muted style={{width: 200, height: "auto"}}/>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg:'none' } }}>
                <video src={carla_scenario} autoPlay loop muted style={{width: 400, height: "auto"}}/>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none', lg: 'flex' } }}>
                <video src={carla_scenario} autoPlay loop muted style={{width: 550, height: "auto"}}/>
              </Box>
            </Grid>
            <Grid size={6}>
              {CarlaContent}
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'flex', md: 'none'}}} >
          <Stack spacing={2}>
              <Carousel>
                <Carousel.Item>
                  <Image src={tshirt} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={mouse} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={thinkpad} fluid />
                </Carousel.Item>
              </Carousel>
              {PrinterContent}
          </Stack>
        </Box>
        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'none', md: 'flex'}}} >
          <Grid container spacing={2}>
            <Grid size={6}>
              {PrinterContent}
            </Grid>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={tshirt} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={mouse} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={thinkpad} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}


export default Project;
