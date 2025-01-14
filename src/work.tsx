import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import testimage from './images/javelin.png';

import map_iv from './images/mapIV.jpg'
import map_iv_map from './images/mapIV_vectormap.png'
import ai_driving from './images/AIdriving.jpg'
import rosbag_to_carla from './images/rosbag_to_carla.mp4'
import qta_all from './images/qta_all.JPG'
import qta from './images/qta.JPG'

function Work() {
  const Map4Content = (
    <Container maxWidth="lg">
      <Typography variant="h4">
        MapIV
      </Typography>
      <Typography variant="body1">
        Part-time engineer at MapIV. MapIV is an software powered company working for 3D map, HDMap, localization software, and hardware stack for localization and mapping. The main custromers are construction company for maintainance and roboticcs company for navigation. I worked at 3D spatial data team. This team integrate technology developed in the other team and creates high quality HDMap and 3D map model. Our engineering goal is developing automation tools, map creation tools with sophisticated UI with highly experienced labeling members. I worked on two projects; assist tools for 3D map model creation and HD map (intermediate format featuring comprehensive and detailed definition or road elements). 
        "3D map model creation" optimizes redundant workflow in managing tasks of the 3D map modeling and quality assessment tasks. The project included a investigation of the entire 3D modeling workflow, development of python scripts to extract and organize modeling data (PCD), and development of Blender extensions to perform quality assessment. 
        "HD map" is adding supported objects the map can represent. In addition to adding functions, I carried out a complete flow of software development in industry, including implementation of test scripts using ctest and pytest, format organization using clang and black, and automated evaluation on github CI/CD. 
      </Typography>
    </Container>
  );

  const Brain4Content = (
    <Container maxWidth="lg">
      <Typography variant="h4">
        BrainIV
      </Typography>
      <Typography variant="body1">
        Part-time engineer at BrainIV. BrainIV is a start-up company from a Nagoya university consisting of four employees. 
        I worked on AI driving school project and driving scene reconstruction. 

        AI driving school is a joint project between TierIV, which develops Autoware, and a Japanese driving school, and BrainIV was in charge of developing the evaluation system.
        AI driving school is a software that evaluates a driver's driving and provides feedback instead of an instructor.
        The evaluation system utilizes Autoware, an open-source automated driving system, to retrieve vehicle location, road information, and surrounding obstacle information to evaluate driving behavior. The system also uses the face information obtained from the driver camera to evaluate whether the driver is appropriately checking the surrounding situation. The evaluation criteria are based on Japanese driving instruction standards, and feedback is provided in real time through user interface stayed beside the cockpit.
        I was involved in the development of the evaluation system in cooperation with other engineers. The developed system has already been introduced at several driving schools for student's independent training in closed areas before obtaining a provisional license. 

        The reconstruction system of the driving situation is part of a national project. This system is designed to test automated driving systems in actual driving conditions. Using driving data (Lidar, GNSS and camera data) and its obstacle recognition data, the system reconstructs the dynamics of other vehicles in a simulator environment (CARLA) and enables the automatied driving system to drive in it. I was the main developer of this system. The vehicle dynamics were based on the collected data and were reproduced using PythonAPI of CARLA simulator. The ego vehicle can be controlled by an external automated driving system independently of the driving data. Other vehicles have several functions, such as moving exactly according to the collected data or moving independently at arbitrary times, to achieve natural interactions with the ego vehicle. Maps are automatically obtained from the vehicle's GNSS trajectory. This enabled the system to automatically reproduce driving situations using driving data as input.
      </Typography>
    </Container>
  );

  const QTAContent = (
    <Container maxWidth="lg">
      <Typography variant="h4">
        Qualified teaching assistant
      </Typography>
      <Typography variant="body1">
        Lecture assistant of Real-World Data Practicum Program. The students in the program consisted of about 120 college students and adults, more than half of whom were working professionals. I supported classroom, checked the quality of online lecture videos, answered questions from the students, and created and graded tests. As the culmination of the program, data analysis group work was also conducted. The group work was conducted in cooperation with 5-6 companies, and each group of five students worked on the data analysis task given by the companies for six monthes. I supported one company at a time (i.e., supported 2-3 groups), providing team management and technical advice.
        During my four years as a QTA, my group was selected as the best team out of a total of 20 teams for three of those years. Since the members of each team were randomly assigned, it was important to get the management of members and tasks on the right path at an early stage in order to complete the project in six months. The fact that I was able to give appropriate advice on these points at the early stage of the group work and provide an appropriate level of technical support as a QTA (too much support can discourage students from participating) are thought to be the reasons for the good results.
      </Typography>
    </Container>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ p:2, flexgrow: 1 }}>
          <div className="mt-3"/>
          <Typography variant="h3">Work</Typography>
        </Box>
        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'flex', md: 'none'}}} >
          <Stack spacing={2}>
              <Carousel>
                <Carousel.Item>
                  <Image src={map_iv} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={map_iv_map} fluid />
                </Carousel.Item>
              </Carousel>
              {Map4Content}
          </Stack>
        </Box>
        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'none', md: 'flex'}}} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={map_iv} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={map_iv_map} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
            <Grid size={6}>
              {Map4Content}
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'flex', md: 'none'}}} >
          <Stack spacing={2}>
              <Carousel>
                <Carousel.Item>
                  <Image src={qta_all} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={qta} fluid />
                </Carousel.Item>
              </Carousel>
              {QTAContent}
          </Stack>
        </Box>
        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'none', md: 'flex'}}} >
          <Grid container spacing={2}>
            <Grid size={6}>
              {QTAContent}
            </Grid>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={qta_all} fluid />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={qta} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'flex', md: 'none'}}} >
          <Stack spacing={2}>
              <Carousel>
                <Carousel.Item interval={5000}>
                  <Image src={ai_driving} fluid />
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                    <video src={rosbag_to_carla} autoPlay loop muted style={{width: 700, height: "auto"}}/>
                </Carousel.Item>
              </Carousel>
              {Brain4Content}
          </Stack>
        </Box>
        <Box sx={{ p:2, flexgrow: 1, display: { xs: 'none', md: 'flex'}}} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item interval={5000}>
                  <Image src={ai_driving} fluid />
                </Carousel.Item>
                <Carousel.Item interval={10000}>
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', lg:'none' } }}>
                    <video src={rosbag_to_carla} autoPlay loop muted style={{width: 200, height: "auto"}}/>
                  </Box>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg:'none' } }}>
                    <video src={rosbag_to_carla} autoPlay loop muted style={{width: 400, height: "auto"}}/>
                  </Box>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none', lg: 'flex' } }}>
                    <video src={rosbag_to_carla} autoPlay loop muted style={{width: 550, height: "auto"}}/>
                  </Box>
                </Carousel.Item>
              </Carousel>
            </Grid>
            <Grid size={6}>
              {Brain4Content}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Work;
