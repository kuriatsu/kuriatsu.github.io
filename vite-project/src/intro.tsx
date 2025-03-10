import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import me from './images/me.jpg';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Intro() {
  const Introduction = (
    <Typography variant="body1" align="left" sx={{p:2}}>
      I’m going to receive a Ph.D. in Informatics in March of this year. My research was on human-machine cooperation in the perception phase of automated driving. I have conducted prototype implementation and validation, research on human behavior modeling, user interface design, and human-machine cooperation mechanisms. Through practical experiences in the automated driving industry, I have an understanding of automated driving systems and related technologies. I have a huge passion for giving shape to new ideas.
    </Typography>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{flexgrow: 1, mt:5, mb:5, display:{xs:"none", md:"flex"}}} >
          <Card  sx={{ display: 'flex' }}>
            <CardMedia component="img" image={me} sx={{width:300}}/>
            <CardContent>
              <Typography variant="h3" align="left" sx={{p:2}}>
                Hi, I'm Atsushi.
              </Typography>
              <div className="mt-3"/>
              {Introduction}
            </CardContent>
          </Card>
        </Box>

        <Box sx={{p:3, flexgrow: 1, mt:5, display:{xs:"flex", md:"none"}}} >
          <Stack spacing={3} alignItems="center">
            <Card sx={{maxWidth: 400}}>
               <CardMedia component="img" image={me}/>
            </Card>
            <Typography variant="h3" align="left" fluid="true">
              Hi, I'm Atsushi.
            </Typography>
            {Introduction}
          </Stack>
        </Box>
      </Container>
    </React.Fragment>
  );
}

function Contact() {
    return (
      <Container>
        <Typography variant="h3" align="center" sx={{mt:5, mb:2}}>
          Contact
        </Typography>
        <Grid container 
              maxWidth="lg" 
              rowSpacing={2} 
              justifyContent="space-evenly" 
              direction="column"
              sx={{display:{xs:"flex", md:"none"}}}>
            <Grid>
              <PlaceIcon/>
              <Typography variant="body1" align="center">
                Nagoya, Aichi, Japan
              </Typography>
            </Grid>
            <Grid>
              <EmailIcon/> 
              <Typography variant="body1" align="center">
                kuriatsubayashi712@gmail.com
              </Typography>
              <Typography variant="body1" align="center">
                kuribayashi.atsushi@g.sp.m.is.nagoya-u.ac.jp
              </Typography>
            </Grid>
            <Grid>
              <PhoneIcon/>
              <Typography variant="body1" align="center">
                +81-80-2565-4481
              </Typography>
            </Grid>
        </Grid>
        <Grid container 
              maxWidth="lg" 
              rowSpacing={2} 
              justifyContent="space-evenly" 
              sx={{display:{xs:"none", md:"flex"}}}>
          <Stack direction="row">
            <Grid sx={{ml:2, mr:1}}>
              <PlaceIcon fontSize="large"/>
              <Typography variant="body1" align="center">
                Nagoya, Aichi, Japan
              </Typography>
            </Grid>
          </Stack>
          <Stack direction="row">
            <Grid sx={{ml:2, mr:1}}>
              <EmailIcon fontSize="large"/> 
              <Typography variant="body1" align="center">
                kuriatsubayashi712@gmail.com
              </Typography>
              <Typography variant="body1" align="center">
                kuribayashi.atsushi@g.sp.m.is.nagoya-u.ac.jp
              </Typography>
            </Grid>
          </Stack>
          <Stack direction="row">
            <Grid sx={{ml:2, mr:1}}>
              <PhoneIcon fontSize="large"/>
              <Typography variant="body1" align="center">
                +81-80-2565-4481
              </Typography>
            </Grid>
          </Stack>
        </Grid>
      </Container>
    );
}

export default {Intro, Contact};
