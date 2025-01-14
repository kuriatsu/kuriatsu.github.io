import * as React from 'react';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Intro from './intro';
import Timeline from './timeline';
import Research from './research';
import Work from './work';
import Project from './project';

const pages = ['Home', 'Work', 'Research', 'Personal Project'];
const page_links = ['/', '#/work', '#/research', '#/project'];

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

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor:"#282c34"}}>
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
                onClick={handleCloseNavMenu}
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
          <Box sx={{flexGrow:1}}>
          <React.Fragment>
            <Intro.Intro />
            <Grid container spacing={2}>
              <Grid size={{xs:12, md:6}} sx={{p:5}}>
              <Timeline.Academic />
              </Grid>
              <Grid size={{xs:12, md:6}} sx={{p:5}}>
              <Timeline.Work />
              </Grid>
            </Grid>
            <Box sx={{width:600,  display: {xs:'flex', md: 'none', lg: 'flex'}}}>
              <Intro.Contact />
            </Box>
            <Box sx={{mx:"auto", width:600, display: {xs:'none', md: 'flex', lg: 'none'}}} >
              <Intro.Contact />
            </Box>
          </React.Fragment>
          </Box>
        }/>
        <Route path="/research" element={
          <React.Fragment>
            <Research.Research />
            <Research.Publication />
          </React.Fragment>
        }/>
        <Route path="/work" element={
          <React.Fragment>
            <Work />
          </React.Fragment>
        }/>
        <Route path="/project" element={
          <React.Fragment>
            <Project />
          </React.Fragment>
        }/>
      </Routes>
    </Router>
  )
}
export default App;

