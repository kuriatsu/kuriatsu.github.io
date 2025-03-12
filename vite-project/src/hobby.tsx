import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import f1_1 from './images/f1.jpg'
import f1_2 from './images/f1_2.jpg'

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
              Course walk with my friend
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="h3" align="left" sx={{mt:10}}>
          Running 
        </Typography>
        <Divider/>
        <Typography variant="h3" align="left" sx={{mt:10}}>
          Fixie
        </Typography>
        <Divider/>
        <Typography variant="h3" align="left" sx={{mt:10}}>
          Javelin Through 
        </Typography>
        <Divider/>
      </Container>
    </React.Fragment>
  );
}

export default Hobby;
