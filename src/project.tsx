import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import testimage from './myjavelin2.png';

function Project() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ p:2, flexgrow: 1 }}>
          <div className="mt-3"/>
          <Typography variant="h3">Personal Projects</Typography>
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
                Mechanical Keyboard
              </Typography>
              <Typography variant="body1">
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ p:2, flexgrow: 1 }} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Typography variant="h4">
                HDMap editor
              </Typography>
              <Typography variant="body1">
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
                Carla Scenario Editor
              </Typography>
              <Typography variant="body1">
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ p:2, flexgrow: 1 }} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Typography variant="h4">
                3D printing for prototyping and repairment
              </Typography>
              <Typography variant="body1">
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
      </Container>
    </React.Fragment>
  );
}


export default Project;
