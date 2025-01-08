import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import testimage from './myjavelin2.png';

function Research() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ p:2, flexgrow: 1 }}>
          <div className="mt-3"/>
          <Typography variant="h3">Research</Typography>
        </Box>
        <Box sx={{ p:2, flexgrow: 1 }} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={testimage} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
            <Grid size={6}>
              <Typography variant="h4">
                Human-Machine Cooperation in Perception of Automated Driving System
              </Typography>
              <Typography variant="body1">
                In automated driving, technical challenges exist in the perception, decision-making, and control stages, which are currently solved by control takeover by human drivers. Although the reliability of automated systems is improving, achieving 100% reliability in the perception phase is difficult because of the uncertainties in the driving environment. In addition, control takeover involves a high cognitive and physical load. Overconfidence due to lack of human understanding of the complex automated systems is also a problem. The more reliable the automated system is, the more difficult maintaining correct mental model becomes. To solve these challenges, I proposed “cooperative perception”. By intervening at the perception phase, rather than the control phase, the cognitive and physical load can be reduced. In addition, intervention in the internal state of the automated system prevents malfunctions from manifesting in vehicle control, as well as helping construction of correct mental models.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ p:2, flexgrow: 1 }} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Typography variant="h4">
                Prototype Demonstration with Mobile Vehicle and Autoware
              </Typography>
              <Typography variant="body1">
                To verify the technical feasibility of cooperative perception, a prototype was implemented and tested in a real-world environment. As an automated vehicle, Autoware.auto, an existing automated driving software, was implemented on a small mobile vehicle. Cooperative perception was realized by implementing an HMI that displays obstacle recognition information from the automated driving system and allows the operator to manipulate the recognition information (selecting whether or not a collision risk exists for the target obstacle). By displaying recognition information on iPad, touch input was received from the operator. In a driving scenario where a pedestrian crosses in front of the vehicle, I showed that the vehicle control is more stable compared to control intervention that overrides the vehicle speed. The possibility of the cooperative perception to improve driving behavior of the automated driving system was demonstrated.
              </Typography>
            </Grid>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={testimage} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ p:2, flexgrow: 1 }} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={testimage} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
            <Grid size={6}>
              <Typography variant="h4">
                Modeling Human Intervention Performance
              </Typography>
              <Typography variant="body1">
                A subject experiment was conducted to investigate the relationship between the time given to the operator during the intervention, the reliability of the intervention (i.e., whether the operator can correctly judge the collision risk of obstacles, etc.), and the input method. Based on levels of situational awareness (SA), traffic light identification (Level 1 SA), pedestrian crossing intention (Level 2 SA), and pedestrian future trajectory (Level 3 SA) were set as perception tasks. The driving environment was created by extracting driving video and annotation information from the PIE data set. Experimental data obtained from 15 participants were used to model the relationship between the intervention time, perception task (required level of SA), and the intervention accuracy.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ p:2, flexgrow: 1 }} >
          <Grid container spacing={2}>
            <Grid size={6}>
              <Typography variant="h4">
                Formulation of Human-Automation Coordination
              </Typography>
              <Typography variant="body1">
                It is not practical for an operator to intervene in all of the large number of recognition tasks that an automated system processes. It is also not practical for the operator to constantly monitor the automated system and determine which recognition results to intervene in. Therefore, it is necessary for the automated system to determine when and which recognition results the operator should intervene, and to request intervention from the operator (request planning). The operator's intervention results must then be integrated with the automated system's recognition results and a high level of reliability must be achieved as a cooperative system as a whole (integration). Given the existence of uncertainty in traffic environment, I have successfully formulated these fundamentals of human-automation coordination (request planning and integration) into a POMDP (Partially Observed Markov Decision Process) model. The formulated algorithm was implemented in an online optimization algorithm (DESPOT) and automated driving was evaluated under various traffic condition using a traffic simulator (SUMO). It was statistically shown that the proposed method achieves higher safety, driving efficiency, and perception accuracy compared to the myopic target selection method. I also revealed the characteristics of cooperative recognition due to the uncertainty of traffic risk.
              </Typography>
            </Grid>
            <Grid size={6}>
              <Carousel>
                <Carousel.Item>
                  <Image src={testimage} fluid />
                </Carousel.Item>
              </Carousel>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}

function Publication() {
  const journal = [
    'A.Kuribayashi, E.Takeuchi, A.Carballo, Y.Ishiguro, and K.Takeda, “Recognition Assistance Interface for Human-Automation Cooperation in Pedestrian Risk Prediction,” SAE Int. J. of CAV 6(3):2023, doi:10.4271/12-06-03-0023.',
    'A.Kuribayashi, E.Takeuchi, A.Carballo, Y.Ishiguro, and K.Takeda, “Optimization of Intervention Request for Human-Machine Cooperative Recognition in Autonomous Driving,” Transactions of Society of Automotive Engineers of Japan: 2023, IJAE-2023-0170.R1',
    'K.Fujii, K.Takeuchi, A.Kuribayashi, N.Takeishi, Y.Kawahara, and K.Takeda."Estimating Counterfactual Treatment Outcomes Over Time in Complex Multiagent Scenarios", IEEE Transactions on Neural Networks and Learning Systems, (2023), doi: 10.1109/TNNLS.2024.3361166.'
  ];
  const int_conference = [
    'A.Kuribayashi, E.Takeuchi, A.Carballo, and K.Takeda, “Recognition assistance interface for autonomous vehicles,” in Proceedings ofthe 5th International Symposium on Future Active Safety Technologytoward Zero Accidents (FAST-zero’19), Virginia, United States, 2018 (Oral)',
    'A.Kuribayashi, E.Takeuchi, A.Carballo, Y.Ishiguro, and K.Takeda, “A comparison of methods for sharing recognition information andinterventions to assist recognition in autonomous driving system,” in IEEE Intelligent Vehicles Symposium (IV), 2021 (Online)',
    'A.Kuribayashi, E.Takeuchi, A.Carballo, Y.Ishiguro, and K.Takeda, “A recognition phase Intervention Interface to Improve Naturalness of Autonomous Driving for Distracted Drivers,” in IEEE  Intelligent Transportation Systems Conferencem (ITSC), 2021 (Online)',
    "K.Fujii, K.Takeuchi, A.Kuribayashi, N.Takeishi, Y.Kawahara, and K.Takeda. “Estimating counterfactual treatment outcomes over time in multi-vehicle simulation.” In Proceedings of the 30th International Conference on Advances in Geographic Information Systems (SIGSPATIAL '22), 2022. (Oral)",
    "A.Kuribayashi, E.Takeuchi, A.Carballo, Y.Ishiguro, and K.Takeda, “Intervention Request Planning with Operator Capability Model for Human-Automation Cooperative Recognition,” in IEEE   International Conference on Mobility: Operations, Services and Technologies (MOST), Detroid, United States, 2023 (Oral)",
    "A.Kuribayashi, E.Takeuchi, A.Carballo, Y.Ishiguro, and K.Takeda, “Uncertainty Aware Task Allocation for Human-Automation Cooperative Recognition in Autonomous Driving Systems,” in IEEE Intelligent Vehicles Symposium (IV), Anchorage, United States 2023 (Poster)",
  ];
  const dom_conference = [
    "A.Kuribayashi, E.Takeuchi, Y.Ishiguro, A.Carballo, and K.Takeda, “Shared Perception: Recognition Assistant Interface to Improve Driving Behaviour Quarity of Autonomous Driving,” Interaction2020, 2020. (Online)",
    "A.Kuribayashi, E.Takeuchi, A.Carballo, Y.Ishiguro, and K.Takeda, “Evaluation of Interface Design for Recognition Phase Human-Automation Cooperation in Automated Driving,” JSAE Annual Congress, 2022. (Oral)"
  ];
  const award = [
    "The 24th Tokai Area Mid-term Presentation of Master's Thesis for Sound Related Laboratories, Grand Prize, 2020.",
    "Outstanding Fellow of Interdisciplinary Frontier Fellow (2023-2024)"
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ p:2, flexgrow: 1 }} >
          <Typography variant="h3"> 
            Publication List
          </Typography>
          <Typography variant="h4"> 
            Journal
          </Typography>
          <ul>
            {journal.map((text, index) => (
              <li>
                <Typography variant="body1"> {text} </Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4"> 
            International Conference
          </Typography>
          <ul>
            {int_conference.map((text, index) => (
              <li>
                <Typography variant="body1"> {text} </Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4"> 
            Domestic Conference
          </Typography>
          <ul>
            {dom_conference.map((text, index) => (
              <li>
                <Typography variant="body1"> {text} </Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4"> 
            Award
          </Typography>
          <ul>
            {award.map((text, index) => (
              <li>
                <Typography variant="body1"> {text} </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default {Research, Publication};
