
import * as React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './App.css';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Intro from './intro';
import Timeline from './timeline';
import PhD from './phd';
import UPenn from './upenn';
import Master from './master';
import MAPIV from './mapiv';
import BRAINIV from './brainiv';
import QTA from './qta';
import Publications from './publications';
import Skill from './skill';
import Project from './project';
import Hobby from './hobby';

const pages = ['Home', 'Publication', 'Project', 'Hobby'];
const page_links = ['/', '#/publication', '#/project', '#/hobby'];

function ResponsiveAppBar() {


  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={page_links[index]}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar sx={{bgcolor:"#282c34"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Atsushi Kuribayashi
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: '.05rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Atsushi Kuribayashi
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={page_links[index]}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Move to GitHub">
              <IconButton href="https://github.com/kuriatsu" sx={{ p: 0 }}>
                <GitHubIcon sx={{color:"white"}}/>
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{ flexGrow: 0, ml:2}}>
            <Tooltip title="Move to LinkedIn">
              <IconButton href="https://www.linkedin.com/in/kuriatsu" sx={{ p: 0 }}>
                <LinkedInIcon sx={{color:"white"}}/>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={
          <Box sx={{mt:10}}>
          <React.Fragment>
            <Intro.Intro />
            <Timeline.Academic />
            <Timeline.Work />
            <Skill />
            <Intro.Contact />
          </React.Fragment>
          </Box>
        }/>
        <Route path="/publication" element={
          <React.Fragment>
            <Publications />
          </React.Fragment>
        }/>
        <Route path="/project" element={
          <React.Fragment>
            <Project.Project />
          </React.Fragment>
        }/>
        <Route path="/project/keyboard" element={
          <React.Fragment>
            <Project.Keyboard />
          </React.Fragment>
        }/>
        <Route path="/project/mouse" element={
          <React.Fragment>
            <Project.Mouse />
          </React.Fragment>
        }/>
        <Route path="/project/repair" element={
          <React.Fragment>
            <Project.Repair />
          </React.Fragment>
        }/>
        <Route path="/hobby" element={
          <React.Fragment>
            <Hobby />
          </React.Fragment>
        }/>
        <Route path="/phd" element={
          <React.Fragment>
            <PhD />
          </React.Fragment>
        }/>
        <Route path="/upenn" element={
          <React.Fragment>
            <UPenn />
          </React.Fragment>
        }/>
        <Route path="/master" element={
          <React.Fragment>
            <Master />
          </React.Fragment>
        }/>
        <Route path="/mapiv" element={
          <React.Fragment>
            <MAPIV />
          </React.Fragment>
        }/>
        <Route path="/qta" element={
          <React.Fragment>
            <QTA />
          </React.Fragment>
        }/>
        <Route path="/brainiv" element={
          <React.Fragment>
            <BRAINIV />
          </React.Fragment>
        }/>
      </Routes>
    </Router>
  )
}


export default App
