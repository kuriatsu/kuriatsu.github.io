import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Typography from '@mui/material/Typography';
import me from './images/me.jpg';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Intro() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{p:3, flexgrow: 1, mt:5}} >
          <Grid container spacing={3} alignItems="center">
            <Grid size={6}>
               <Image src={me} fluid roundedCircle/>
            </Grid>
            <Grid size={6}>
              <Typography variant="h3">
                Hi, I'm Atsushi.
              </Typography>
              <div className="mt-3"/>
              <Typography variant="body1">
                I’m going to receive a Ph.D. in Informatics in March of this year. My research was on human-machine cooperation in the perception phase of automated driving. I have conducted prototype implementation and validation, research on human behavior modeling, user interface design, and human-machine cooperation mechanisms. Through practical experiences in the automated driving industry, I have an understanding of automated driving systems and related technologies. I have a huge passion for giving shape to new ideas.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

function Contact() {
    return (
      <Container maxWidth="md">
        <Box sx={{p:2, flexgrow: 1 }} >
          <Grid>
            <h1> Contact </h1>
          </Grid>
          <Grid container direction="column" sx={{justifyContents: "center", alignItems: "center"}}>
            <Grid>
              <PlaceIcon/>
            </Grid>
            <Grid>
              <a>  Nagoya, Aichi, Japan </a>
            </Grid>
          </Grid>
          <Grid container direction="column" sx={{justifyContents: "center", alignItems: "center"}}>
            <Grid>
              <EmailIcon/> 
            </Grid>
            <Grid>
              <a> kuriatsubayashi712@gmail.com </a>
            </Grid>
            <Grid>
              <a> kuribayashi.atsushi@g.sp.m.is.nagoya-u.ac.jp </a>
            </Grid>
          </Grid>
          <Grid container direction="column" sx={{justifyContents: "center", alignItems: "center"}}>
            <Grid>
              <PhoneIcon/>
            </Grid>
            <Grid>
              <a>  +81-80-2565-4481 </a>
            </Grid>
          </Grid>
        </Box>
      </Container>

    );
}

export default {Intro, Contact};
