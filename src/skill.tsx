import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import cpp from './images/cpp.png';
import python from './images/python.png';
import qt from './images/qt.png';
import react from './images/react.png';
import ros from './images/ros.png';
import unreal from './images/unreal.png';
import blender from './images/blender.png';
import git from './images/git.png';
import docker from './images/docker.png';

function Skill() {

  return (
  <Container maxWidth="lg">
    <Box>
      <Typography variant="h2" align="center" sx={{mt:10, mb:5}}> Skill </Typography>
    </Box>
    <Grid container sx={{justifyContent: "center", alignItems:"stretch"}}>
      <Grid>
        <Card sx={{width:220, mr:1.3, mb:1}}>
          <CardHeader avatar={<Avatar src={cpp}/>}
                      title={
                          <Typography variant="h5" align="left">
                            C++
                          </Typography>
                      }/>
          <CardContent>
            <Typography variant="body1" align="left">
              Experience in research and development, primarily for system development. Implement custom class and library from scratch.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card sx={{width:220, mr:1.3, mb:1}}>
          <CardHeader avatar={<Avatar src={python}/>}
                      title={
                        <Typography variant="h5" align="left">
                          Python
                        </Typography>
                      }/>
          <CardContent>
            <Typography variant="body1" align="left">
              Experience in research and development, primarily for data analysis and system development. Implement custom class and library from scratch.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card sx={{width:220, mr:1.3, mb:1}}>
          <CardHeader avatar={<Avatar src={react}/>}
                      title={
                          <Typography variant="h5" align="left">
                            React+TS
                          </Typography>
                      }/>
          <CardContent>
            <Typography variant="body1" align="left">
              Made this site with React+TS+MUI from scratch. Implement with reference.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <Card sx={{width:220, mr:1.3, mb:1}}>
          <CardHeader avatar={<Avatar src={qt}/>}
                      title={
                          <Typography variant="h5" align="left">
                            QT 
                          </Typography>
                      }/>
          <CardContent>
            <Typography variant="body1" align="left">
              Used for <a href="https://github.com/kuriatsu/rviz_hdmap_editor">personal project</a>. Implement UI with QT Creator and C++. Learning QT Quick.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card sx={{width:220, mr:1.3, mb:1}}>
          <CardHeader avatar={<Avatar src={ros}/>}
                      title={
                          <Typography variant="h5" align="left">
                            ROS
                          </Typography>
                      }/>
          <CardContent>
            <Typography variant="body1" align="left">
              Experience in research and development. Implement custom package and library from scratch. ROS1 and ROS2.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card sx={{width:220, mr:1.3, mb:1}}>
          <CardHeader avatar={<Avatar src={unreal}/>}
                      title={
                          <Typography variant="h6" align="left">
                            Unreal Engine
                          </Typography>
                      }/>
          <CardContent>
            <Typography variant="body1" align="left">
              Experience in research. Used for implementing HMI with ROS.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card sx={{width:220, mr:1.3, mb:1}}>
          <CardHeader avatar={<Avatar src={blender}/>}
                      title={
                          <Typography variant="h5" align="left">
                            Blender
                          </Typography>
                      }/>
          <CardContent>
            <Typography variant="body1" align="left">
              Experience in research. Used for rendering excelent and cool image for publications.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card sx={{width:220, mr:1.3, mb:1}}>
          <CardHeader avatar={<Avatar src={git}/>}
                      title={
                          <Typography variant="h5" align="left">
                            Git
                          </Typography>
                      }/>
          <CardContent>
            <Typography variant="body1" align="left">
              Practical experience, daily use.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card sx={{width:220, mr:1.3, mb:1}}>
          <CardHeader avatar={<Avatar src={docker}/>}
                      title={
                          <Typography variant="h5" align="left">
                            Docker
                          </Typography>
                      }/>
          <CardContent>
            <Typography variant="body1" align="left">
              DockerImage, docker compose
            </Typography>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
    <Grid container>
      <Grid p={1}> <Chip label="Human Factor"/> </Grid>
      <Grid p={1}> <Chip label="ACT-R"/> </Grid>
      <Grid p={1}> <Chip label="HMI"/> </Grid>
      <Grid p={1}> <Chip label="Human-Machine Cooperation"/> </Grid>
      <Grid p={1}> <Chip label="POMDP"/> </Grid>
      <Grid p={1}> <Chip label="Reinforcement Learning"/> </Grid>
      <Grid p={1}> <Chip label="Autoware"/> </Grid>
      <Grid p={1}> <Chip label="CARLA"/> </Grid>
      <Grid p={1}> <Chip label="SUMO"/> </Grid>
      <Grid p={1}> <Chip label="Simulator"/> </Grid>
      <Grid p={1}> <Chip label="CAD"/> </Grid>
      <Grid p={1}> <Chip label="PCB Design"/> </Grid>
    </Grid>
  </Container>
  );
}

export default Skill
