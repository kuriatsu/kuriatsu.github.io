import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';

import f1_1 from './images/f1.jpg'
import f1_2 from './images/f1_2.jpg'
import fixie from './images/fixie.jpg'
import mash from './images/mash.jpg'
import huarache from './images/huarache.jpg'
import javelin_highschool from './images/javelin_highschool.jpg'
import javelin_uni from './images/javelin_uni.gif'

function Hobby() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h3" align="left" sx={{mt:10}}>
          F1
        </Typography>
        <Divider/>
        <Grid container direction="row" columnSpacing={2} sx={{mt:3}}>
          <Grid size={6}>
            <Box component="img" src={f1_1} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" p={2}>
              Circuit walk at Suzuka circuit
            </Typography>
          </Grid>
          <Grid size={6}>
            <Box component="img" src={f1_2} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" p={2}>
              Course walk with my friend <a href="https://github.com/HanaRo">Haoran</a>
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h3" align="left" sx={{mt:10}}>
          Running 
        </Typography>
        <Divider/>
        <Box component="img" src={huarache} sx={{mt:3, width:"70%", borderRadius:3}}/>
        <Typography variant="body1" align="center" p={2}>
          I love running with sandal!
        </Typography>

        <Typography variant="h3" align="left" sx={{mt:10}}>
          Fixie
        </Typography>
        <Divider/>
        <Box component="img" src={fixie} sx={{mt:3, width:"70%", borderRadius:3}}/>
        <Typography variant="body1" align="center" p={2}>
          Bridgestone truck (Keirin) frame.
          I put a brake hole on the front fork.
          All of components are collected one by one. 
          Handle, stem, head-set, pedal, crank, chain, cog, chain tensioner are NJS certificated.
          Front brake is Shimano Dura Ace BR-7402. 
          Omamori on the rear instead of rear brake for traffic safety.
          Brake lever is Paul E-Lever, quite beautiful CNC machined alminium.
          Seat post is Dura Ace SP-7410 (Easton collaborated model). 
          Saddle is Selle Italia SLR, 120g light weight.
          Rim is H-PLUS-SON TB-14 the box rim.
          Not sure about hub and spoke.
          Tire is Continental Gator Skin
        </Typography>
        <Box component="img" src={mash} sx={{width:"70%", borderRadius:3}}/>
        <Typography variant="body1" align="center" p={{mt:2}}>
          In front of MASH SF
        </Typography>
        <Typography variant="h3" align="left" sx={{mt:10}}>
          Javelin Through 
        </Typography>
        <Divider/>
        <Grid container direction="row" columnSpacing={2} sx={{mt:3}}>
          <Grid size={3.56}>
            <Box component="img" src={javelin_highschool} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" p={2}>
              Inter-Highschool Athletic Meeting 2013
              Best: 58m85cm
            </Typography>
          </Grid>
          <Grid size={8.44}>
            <Box component="img" src={javelin_uni} sx={{width:"99%", borderRadius:3}}/>
            <Typography variant="body1" align="center" p={2}>
              During university. Best: 60m86cm
            </Typography>
          </Grid>
        </Grid>
        <Box p={3}>
          <iframe width="1016" height="572" src="https://www.youtube.com/embed/duMhutfB07I" title="名古屋大学陸上競技部2017PV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <Typography variant="body1" align="center" p={2}>
            Track&Field club of Nagoya University
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Hobby;
