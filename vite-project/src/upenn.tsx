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

import f1_tenth1 from './images/upenn_f1tenth.jpg';
import f1_tenth2 from './images/upenn_f1tenth_2.png';
import mlab from './images/upenn.jpg';
import sf_goldenbridge from './images/sf_goldenbridge.jpg';
import sf_landscape from './images/sf_landscape.jpg';

function UPenn() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{mt:10, mb:10}}>
          <Typography variant="h2" align="left">
            Research Internship at UPenn mLab
          </Typography>
          <Typography variant="h4" align="left">
            Department of electrical engineering, at mLab of Prof. Rahul Mangharam.
          </Typography>
        </Box>
        <Stack>
        <Typography variant="h6" align="left">
          mLab developed F1Tenth and is organizing automated driving races at several international conferences.
          F1Tenth is a 1/10 scale vehicle for education on automated driving and robotics, and for validation of algorithms developed in research.
        </Typography>
        <Grid container direction="row" columnSpacing={2} sx={{mt:5}}>
          <Grid size={6}>
            <Box component="img" src={f1_tenth1} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" p={2}>
              Classroom teaching using the F1Tenth
            </Typography>
          </Grid>
          <Grid size={6}>
            <Box component="img" src={f1_tenth2} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" p={2}>
              Student teams developing automated driving using go cart vehicles and Autoware
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="h6" align="left" sx={{mt:3}}>
          MLab focuses on control theory and game theory. They actively collaborate with other universities and researchers, and various researchers and students come in and out of the lab every day, leading to lively discussions (which makes security issues). Professor Rahul is very open and frank. He often told us “Proceed step by step”. His teaching principle is fundamental, but it is a perspective that many students tend to overlook. I have learned a lot from him, from the fundamentals to advanced aspects of research. mLab students are very talented, at both academical and personality, and I love them. I had gained a lot of inspiration and lessons from them. Philadelphia is rich in both arts, sports, and culture, and I spent my holidays with lab mates going to the center of town to chill. I am extremely grateful to them for their warm welcome to me.
          I worked on automated driving with imitation learning. I attempted to control the quality and performance of the learning model by controlling the training data with a prediction framework called “conformal prediction". I regret that my stay was only three months, so I ended up doing only basic experiments.
        </Typography>
        <Box>
          <Box component="img" src={mlab} sx={{width:"80%", mt:5, borderRadius:3}}/>
          <Typography variant="body1" align="center" p={2}>
            mLab members 
          </Typography>
        </Box>

        <Typography variant="h6" align="left" sx={{mt:5}}>
          After leaving Philly, I stopped in San Francisco and enjoyed the beautiful city and the pleasant June weather. San Francisco is a mecca for fixed gear, and I was happy just to hang around the city I adored so much.
        </Typography>
        <Grid container direction="row" columnSpacing={2} sx={{mt:5}}>
          <Grid size={6}>
            <Box component="img" src={sf_landscape} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" p={2}>
              Twin Peaks
            </Typography>
          </Grid>
          <Grid size={6}>
            <Box component="img" src={sf_goldenbridge} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" p={2}>
              Golden Gate Bridge
            </Typography>
          </Grid>
        </Grid>
        </Stack>
      </Container>
    </React.Fragment>
  );
}
export default UPenn;
