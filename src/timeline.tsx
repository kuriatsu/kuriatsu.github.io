import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function Content(duration: string, title: string, description: string) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div
            aria-owns={open ? 'popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <Typography variant="h6"> {duration} </Typography>
            <Typography variant="body1"> {title} </Typography>
          </div>
          <Popover
            id="popover"
            sx={{ pointerEvents: 'none' }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>
              {description}
            </Typography>

          </Popover>
        </TimelineContent>
      </TimelineItem>
  );
}

function Academic() {

  return (
  <Container maxWidth="md">
    <Box sx={{p:3, flexgrow: 2 }} >
    <Typography variant="h4"> Academic </Typography>
    <Timeline>
      {Content(
        "1 Apr 2021 - 25 Mar 2025",
        "Ph.D. Candidate at Nagoya University",
        "Department of informatics. Major in intelligent systems. I studied about human-machine cooperation in automated driving. Especially seeking for the cooperation in the perception phase of automated driving systems."
      )}
      {Content(
        "12 Mar 2024 - 12 Jun 2024",
        "Research internship at University of Pennsylvania",
        "Department of electrical engineering, at mLab of Prof. Rahul Mangharam. I worked on the driving style prediction using conformal prediction algorithm."
      )}
      {Content(
        "1 Apr 2019 - 25 Mar 2021",
        "Master at Nagoya University",
        "Department of Informatics, department of intelligent systems."
      )}
      {Content(
        "1 Apr 2015 - 25 Mar 2019",
        "Bachelor at Nagoya University",
        "Department of engineering, Major in electrical and electronic engineering and information engineering"
      )}
    </Timeline>
    </Box>
   </Container>
  );
}

function Work() {

  return (
  <Container maxWidth="md">
    <Box sx={{p:3, flexgrow: 2 }} >
    <Typography variant="h4"> Work </Typography>
    <Timeline>
      {Content(
        "1 Dec 2024 - Now",
        "MapIV",
        "Part-time engineer at MapIV, 3D mapping and localization company. I worked on 3D map creation tool and HD map format."
      )}
      {Content(
        "12 Mar 2024 - 12 Jun 2024",
        "Qualified Teaching Assistant",
        "Lecture assistant of Real-World Data Practicum Program (classroom, excersise, group work)"
      )}
      {Content(
        "1 Apr 2019 - 12 Mar 2024",
        "BrainIV",
        "Part-time engineer at BrainIV, a child company of TierIV. I worked on AI driving school project and driving scene reconstruction."
      )}
    </Timeline>
    </Box>
  </Container>
  );
}
export default {Academic, Work}

