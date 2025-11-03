import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import me from './images/me.jpg';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Intro() {
  const Introduction = (
      <p>I’m going to receive a Ph.D. in Informatics in March of this year. My research was on human-machine cooperation in the perception phase of automated driving. I have conducted prototype implementation and validation, research on human behavior modeling, user interface design, and human-machine cooperation mechanisms. Through practical experiences in the automated driving industry, I have an understanding of automated driving systems and related technologies. I have a huge passion for giving shape to new ideas.</p>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
          <Grid container columnSpacing={3} sx={{mt:15, mb:5, display:{xs:"none", lg:"flex"}}}>
            <Grid size={4}>
              <Box component="img" src={me} sx={{width:"90%", borderRadius:5}}/>
            </Grid>
            <Grid size={8}>
              <Typography variant="h2" align="left" sx={{mt:1}}>
                Hi, I'm Atsushi.
              </Typography>
              <Typography variant="h6" align="left" sx={{mt:2, mb:2}}>
                {Introduction}
              </Typography>
            </Grid>
          </Grid>

          <Grid container columnSpacing={3} sx={{mt:15, mb:5, display:{xs:"flex", lg:"none"}}}>
            <Grid size={12}>
              <Box component="img" src={me} sx={{width:"40%", borderRadius:5}}/>
            </Grid>
            <Grid size={12} sx={{mt:3}}>
              <Typography variant="h2" align="center">
                Hi, I'm Atsushi.
              </Typography>
              <Typography variant="h6" align="center" sx={{mt:2, mb:2}}>
                {Introduction}
              </Typography>
            </Grid>
          </Grid>
      </Container>
    </React.Fragment>
  );
}

function Contact() {
    return (
      <Container>
        <Typography variant="h4" align="center" sx={{mt:10, mb:5}}>
          Contact
        </Typography>
        <Grid container 
              maxWidth="lg" 
              rowSpacing={2} 
              justifyContent="space-evenly" 
              direction="column"
              sx={{display:{xs:"flex", md:"none"}, mb:10}}>
            <Grid>
              <PlaceIcon fontSize="large"/>
              <Typography variant="body1" align="center">
                Nagoya, Aichi, Japan
              </Typography>
            </Grid>
            <Grid>
              <EmailIcon fontSize="large"/> 
              <Typography variant="body1" align="center">
                kuriatsubayashi712@gmail.com
              </Typography>
              <Typography variant="body1" align="center">
                kuribayashi.atsushi@g.sp.m.is.nagoya-u.ac.jp
              </Typography>
            </Grid>
            <Grid>
              <PhoneIcon fontSize="large"/>
              <Typography variant="body1" align="center">
                +81-80-2565-4481
              </Typography>
            </Grid>
        </Grid>
        <Grid container 
              maxWidth="lg" 
              rowSpacing={2} 
              justifyContent="space-evenly" 
              sx={{display:{xs:"none", md:"flex"}, mb:10}}>
          <Stack direction="row">
            <Grid sx={{ml:2, mr:1}}>
              <PlaceIcon fontSize="large"/>
              <Typography variant="body1" align="center">
                Kashiwa, Chiba, Japan
              </Typography>
            </Grid>
          </Stack>
          <Stack direction="row">
            <Grid sx={{ml:2, mr:1}}>
              <EmailIcon fontSize="large"/> 
              <Typography variant="body1" align="center">
                kuribayashi.a@t2.auto
              </Typography>
              <Typography variant="body1" align="center">
                kuriatsubayashi712@gmail.com
              </Typography>
              <Typography variant="body1" align="center">
                kuribayashi.atsushi@g.sp.m.is.nagoya-u.ac.jp
              </Typography>
            </Grid>
          </Stack>
        </Grid>
      </Container>
    );
}

export default {Intro, Contact};
