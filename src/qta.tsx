import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';

import logo from './images/mds_logo.png'
import qta_all from './images/qta_all.jpg'
import qta from './images/qta.jpg'

function QTA() {
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container columnSpacing={3} sx={{mt:15, alignItems:"center"}}>
          <Grid size={2}>
            <Box component="img" src={logo} sx={{width:"99%", borderRadius:3}}/>
          </Grid>
          <Grid size={10}>
            <Typography variant="h3" align="left">
              <a href="https://www.mds.nagoya-u.ac.jp/">Center for Artificial Intelligence, Mathematical and Data Science</a>
            </Typography>
            <Typography variant="body1" align="left">
              An educational institution of Nagoya University that develops and provides educational content in the fields of mathematics, data science, and artificial intelligence, and contributes to the development of academics and the resolution of social issues.
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h3" align="left" sx={{mt:3}}>
          Overview
        </Typography>
        <Divider/>
        <Typography variant="h6" align="left" sx={{mt:3}}>
          Qualified teaching assistant at MDS center for four years. Over 120 students in the program consisted of college students and full-time worker at various company. I assisted the lectures on the fundamentals of data analysis, as well as applied lectures on deep learning and social implementation. As the culmination of the lecture, group work was conducted. I supervised 3-6 groups consist of 5 students. 
        </Typography>


        <Typography variant="h3" align="left" sx={{mt:5}}>
          Lecture Assistant
        </Typography>
        <Divider/>
        <Typography variant="h6" align="left" sx={{mt:3}}>
          I supported lecture, checked the quality of online lecture videos, answered questions from the students, and created and graded tests.
          The lecture includes the fundamentals of data analysis (, deep learning, and social implementation. As the culmination of the lecture, group work was conducted. I supervised 3-6 groups consist of 5 students. 
        </Typography>

        <Typography variant="h3" align="left" sx={{mt:5}}>
          Real-World Data Practicum
        </Typography>
        <Divider/>
        <Grid container columnSpacing={3} rowSpacing={3} sx={{mt:3}}>
          <Grid size={6.42}>
            <Box component="img" src={qta_all} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" sx={{mt:1}}>
              Memorial photo with students, lecturerers, support members
            </Typography>
          </Grid>
          <Grid size={5.58}>
            <Box component="img" src={qta} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" sx={{mt:1}}>
              QTA members 
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h6" align="left" sx={{mt:3}}>
          During my four years as a QTA, my group was selected as the best team out of a total of 20 teams for three of those years. Since the members of each team were randomly assigned, it was important to get the management of members and tasks on the right path at an early stage in order to complete the project in six months. The fact that I was able to give appropriate advice on these points at the early stage of the group work and provide an appropriate level of technical support as a QTA (too much support can discourage students from participating) are thought to be the reasons for the good results.
        </Typography>

      </Container>
    </React.Fragment>
  );
}

export default QTA;
