import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import testimage from './myjavelin2.png';

function Work() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ p:2, flexgrow: 1 }}>
          <div className="mt-3"/>
          <Typography variant="h3">Work</Typography>
        </Box>
        <Box sx={{ p:2, flexgrow: 1 }} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={testimage} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
            <Grid size={6}>
              <Typography variant="h4">
                MapIV
              </Typography>
              <Typography variant="body1">
                Part-time engineer at MapIV. MapIV is an software powered company working for 3D map, HDMap, localization software, and hardware stack for localization and mapping. The main custromers are construction company for maintainance and roboticcs company for navigation. I worked at 3D spatial data team. This team integrate technology developed in the other team and creates high quality HDMap and 3D map model. Our engineering goal is developing automation tools, map creation tools with sophisticated UI with highly experienced labeling members. I worked on two projects; assist tools for 3D map model creation and HD map format currentry for internal use (intermediate format for comprehensive definition). 3D map creation tool optimize redundant workflow of managing the 3D map modeling task with multiple modelers and quality assessment tasks. 3D map format is the intermediate map format that includes more comprehensive and detailed information than that of commonly used format (lanelet, OpenDrive etc.) 
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ p:2, flexgrow: 1 }} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Typography variant="h4">
                Qualified teaching assistant
              </Typography>
              <Typography variant="body1">
                Lecture assistant of Real-World Data Practicum Program (classroom, excersise, group work)
              </Typography>
            </Grid>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={testimage} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ p:2, flexgrow: 1 }} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={testimage} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
            <Grid size={6}>
              <Typography variant="h4">
                BrainIV
              </Typography>
              <Typography variant="body1">
                Part-time engineer at BrainIV, a child company of TierIV. I worked on AI driving school project and driving scene reconstruction.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Work;
