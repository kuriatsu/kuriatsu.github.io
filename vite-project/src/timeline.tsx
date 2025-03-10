import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import me from './images/me.jpg';

function Academic() {

  return (
  <Container maxWidth="lg">
    <Box>
      <Typography variant="h3" align="center" sx={{mt:10, mb:3}}> Academic </Typography>
    </Box>
    <Card sx={{display: 'flex', mb:2}}>
      <CardActionArea href='#/phd'>
        <CardContent align="left">
          <Stack direction="row" spacing={2} >
            <Chip sx={{minWidth:190, maxWidth:190}} label=" 1 Apr 2021 - 25 Mar 2025" />
            <Box>
              <Typography variant="h5" align="left">
                Ph.D. Candidate at Nagoya University
              </Typography>
              <Typography variant="body1" align="left">
                Department of informatics. Major in intelligent systems. I studied about human-machine cooperation in automated driving. Especially seeking for the cooperation in the perception phase of automated driving systems.
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{display: 'flex', mb:2}}>
      <CardActionArea href='#/upenn'>
        <CardContent align="left">
          <Stack direction="row" spacing={2} >
            <Chip sx={{minWidth:190, maxWidth:190}} label="12 Mar 2024 - 12 Jun 2024" />
            <Box>
              <Typography variant="h5" align="left">
                Research internship at University of Pennsylvania
              </Typography>
              <Typography variant="body1" align="left">
                Department of electrical engineering, at mLab of Prof. Rahul Mangharam. I worked on the driving style prediction using conformal prediction algorithm.
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{display: 'flex', mb:2}}>
      <CardActionArea href='#/master'>
        <CardContent align="left">
          <Stack direction="row" spacing={2} >
            <Chip sx={{minWidth:190, maxWidth:190}} label="1 Apr 2019 - 25 Mar 2021" />
            <Box>
              <Typography variant="h5" align="left">
                Master at Nagoya University
              </Typography>
              <Typography variant="body1" align="left">
                Department of Informatics, department of intelligent systems.
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{display: 'flex', mb:2}}>
      <CardActionArea>
        <CardContent align="left">
          <Stack direction="row" spacing={2} >
            <Chip sx={{minWidth:190, maxWidth:190}} label="1 Apr 2015 - 25 Mar 2019" />
            <Box>
              <Typography variant="h5" align="left">
                Bachelor at Nagoya University
              </Typography>
              <Typography variant="body1" align="left">
                Department of engineering, Major in electrical and electronic engineering and information engineering
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>

  </Container>
  );
}

function Work() {

  return (
  <Container maxWidth="lg">
    <Box>
      <Typography variant="h3" align="center" sx={{mt:10, mb:3}}> Work </Typography>
    </Box>

    <Card sx={{display: 'flex', mb:2}}>
      <CardActionArea href='#/mapiv'>
        <CardContent align="left">
          <Stack direction="row" spacing={2} >
            <Chip sx={{minWidth:190, maxWidth:190}} label=" 1 Dec 2024 - Now" />
            <Box>
              <Typography variant="h5" align="left">
                MapIV
              </Typography>
              <Typography variant="body1" align="left">
                Part-time engineer at MapIV, 3D mapping and localization company. I worked on 3D map creation tool and HD map format.
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{display: 'flex', mb:2}}>
      <CardActionArea href='#/qta'>
        <CardContent align="left">
          <Stack direction="row" spacing={2} >
            <Chip sx={{minWidth:190, maxWidth:190}} label="12 Mar 2024 - 12 Jun 2024" />
            <Box>
              <Typography variant="h5" align="left">
                Qualified Teaching Assistant
              </Typography>
              <Typography variant="body1" align="left">
                Lecture assistant of Real-World Data Practicum Program (classroom, excersise, group work)
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{display: 'flex', mb:2}}>
      <CardActionArea href='#/brainiv'>
        <CardContent align="left">
          <Stack direction="row" spacing={2} >
            <Chip sx={{minWidth:190, maxWidth:190}} label="1 Apr 2019 - 12 Mar 2024" />
            <Box>
              <Typography variant="h5" align="left">
                BrainIV
              </Typography>
              <Typography variant="body1" align="left">
                Part-time engineer at BrainIV, a child company of TierIV. I worked on AI driving school project and driving scene reconstruction.
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>

  </Container>
  );
}
export default {Academic, Work}

