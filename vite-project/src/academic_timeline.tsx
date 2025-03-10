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


function Academic() {
  const [anchorPhdEl, setAnchorPhdEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverPhdOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorPhdEl(event.currentTarget);
  };

  const handlePopoverPhdClose = () => {
    setAnchorPhdEl(null);
  };

  const openPhd = Boolean(anchorPhdEl);

  const [anchorPennEl, setAnchorPennEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverPennOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorPennEl(event.currentTarget);
  };

  const handlePopoverPennClose = () => {
    setAnchorPennEl(null);
  };

  const openPenn = Boolean(anchorPennEl);

  const [anchorMsEl, setAnchorMsEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverMsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorMsEl(event.currentTarget);
  };

  const handlePopoverMsClose = () => {
    setAnchorMsEl(null);
  };

  const openMs = Boolean(anchorMsEl);

  const [anchorBsEl, setAnchorBsEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverBsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorBsEl(event.currentTarget);
  };

  const handlePopoverBsClose = () => {
    setAnchorBsEl(null);
  };

  const openBs = Boolean(anchorBsEl);

  return (
  <Container maxWidth="md">
    <Box sx={{ flexgrow: 2 }} >
    <h1> Academic </h1>
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div
            aria-owns={openPhd ? 'popover-phd' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverPhdOpen}
            onMouseLeave={handlePopoverPhdClose}
          >
            <Typography variant="h6"> 1 Apr 2021 - 25 Mar 2025 </Typography>
            <Typography variant="body1">Ph.D. Candidate at Nagoya University</Typography>
          </div>
          <Popover
            id="popover-phd"
            sx={{ pointerEvents: 'none' }}
            open={openPhd}
            anchorEl={anchorPhdEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverPhdClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>
              Department of informatics. Major in intelligent systems. I studied about human-machine cooperation in automated driving. Especially seeking for the cooperation in the perception phase of automated driving systems.
            </Typography>

          </Popover>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div
            aria-owns={openPenn ? 'popover-penn' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverPennOpen}
            onMouseLeave={handlePopoverPennClose}
          >
            <Typography variant="h6"> 12 Mar 2024 - 12 Jun 2024 </Typography>
            <Typography variant="body1">Research internship at University of Pennsylvania</Typography>
          </div>
          <Popover
            id="popover-penn"
            sx={{ pointerEvents: 'none' }}
            open={openPenn}
            anchorEl={anchorPennEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverPennClose}
            disableRestoreFocus
          >
          <Typography sx={{ p: 2 }}>
            Department of electrical engineering, at mLab of Prof. Rahul Mangharam. I worked on the driving style prediction using conformal prediction algorithm.
          </Typography>

          </Popover>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div
            aria-owns={openMs ? 'popover-ms' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverMsOpen}
            onMouseLeave={handlePopoverMsClose}
          >
            <Typography variant="h6"> 1 Apr 2019 - 25 Mar 2021</Typography>
            <Typography variant="body1">Master at Nagoya University</Typography>
          </div>
          <Popover
            id="popover-ms"
            sx={{ pointerEvents: 'none' }}
            open={openMs}
            anchorEl={anchorMsEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverMsClose}
            disableRestoreFocus
          >
          <Typography sx={{ p: 2 }}>
            Department of Informatics, department of intelligent systems
          </Typography>

          </Popover>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <div
            aria-owns={openBs ? 'popover-bs' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverBsOpen}
            onMouseLeave={handlePopoverBsClose}
          >
            <Typography variant="h6"> 1 Apr 2015 - 25 Mar 2019</Typography>
            <Typography variant="body1">Bachelor at Nagoya University</Typography>
          </div>
          <Popover
            id="popover-bs"
            sx={{ pointerEvents: 'none' }}
            open={openBs}
            anchorEl={anchorBsEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            onClose={handlePopoverBsClose}
            disableRestoreFocus
          >
          <Typography sx={{ p: 2 }}>
            Department of engineering, Major in electrical and electronic engineering and information engineering
          </Typography>

          </Popover>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Box>
   </Container>
  );
}

export default {Academic}

