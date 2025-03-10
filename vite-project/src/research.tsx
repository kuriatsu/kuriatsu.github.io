import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import {useState, useEffect} from "react";

import cp_chill from './images/driver_chill.png';
import cp_request from './images/request.png';
import cp_share from './images/share.png';
import cp_intervention from './images/intervention.png';
import cp_passed from './images/ads_passed.png';
import cp_diagram from './images/ras_image.png';


import takeover_2 from './images/takeover_2.png';
import takeover_3 from './images/takeover_3.png';

import system_operator from './images/system_operator.png';
import system_cooperation from './images/system_cooperation.png';

import system_ui from './images/system_ui.png';
import cp_carla from './images/cp_carla.mp4';
import result_min_vel from './images/min_vel.png';
import result_nasa_tlx from './images/nasa-tlx.png';

import pie from './images/pie_touch.png';
import pie_result from './images/int_acc.png';

import pomdp_state_space from './images/state_space.png';
import pomdp_sumo from './images/pomdp_demo.mp4';
import pomdp_speed from './images/pass_speed.png';
import pomdp_count from './images/request_count.png';
import challenging_scenario from './images/challenging_scenario.png';


function PhD() {
  const takeover_images = [cp_chill, takeover_2, takeover_3];
  const takeover_descriptions = [
      "1. While automated driving, driver monitors the ADS.", 
      "2. ADS requests intervention or the driver detects emergency.", 
      "3. Quickly understand the situation and takeover vehicle control." 
  ];

  let takeover_count: number = 0;
  const [takeover_image, setTakeoverImage] = useState(takeover_images[0]);
  const [takeover_description, setTakeoverDescription] = useState(takeover_descriptions[0]);
  const handleTakeoverPush = (num: number) => () => {
    takeover_count = takeover_count + num;
    setTakeoverImage(takeover_images[takeover_count%takeover_images.length]);
    setTakeoverDescription(takeover_descriptions[takeover_count%takeover_description.length]);
  }

  useEffect(() => {
    const takeover_interval = setInterval(() => {
      takeover_count = takeover_count + 1;
      setTakeoverImage(takeover_images[takeover_count%takeover_images.length]);
      setTakeoverDescription(takeover_descriptions[takeover_count%takeover_descriptions.length]);
    }, 5000); // 3秒ごとに変更
    return () => clearInterval(takeover_interval);
  }, []);

  const cp_images = [cp_chill, cp_share, cp_request, cp_intervention, cp_passed];
  const cp_descriptions = [
      "1. While automated driving.", 
      "2. Shapre perception information with operator", 
      "3. ADS monitor the information and request intervention to operator.", 
      "4. Operator collect mistakes in perception result.",
      "5. Reflect intervention result to perception state of ADS."
  ];

  let cp_count: number = 0;
  const [cp_image, setCPImage] = useState(cp_images[0]);
  const [cp_description, setCPDescription] = useState(cp_descriptions[0]);
  const handleCPPush = (num: number) => () => {
    cp_count = cp_count + num;
    setCPImage(cp_images[cp_count%cp_images.length]);
    setCPDescription(cp_descriptions[cp_count%cp_description.length]);
  }

  useEffect(() => {
    const cp_interval = setInterval(() => {
      cp_count = cp_count + 1;
      setCPImage(cp_images[cp_count%cp_images.length]);
      setCPDescription(cp_descriptions[cp_count%cp_descriptions.length]);
    }, 5000); // 3秒ごとに変更
    return () => clearInterval(cp_interval);
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{mt:10}}>
          <Typography variant="h2" align="left">
            Ph.D. Research: 
          </Typography>
          <Typography variant="h2" align="left">
            Human-Machine Cooperation in Perception of Automated Driving System
          </Typography>
        </Box>

        <Stack container columnSpacing={2} sx={{mt:15}}>
          <Box>
            <Typography variant="h4" align="left">
              Motivation
            </Typography>
          </Box>
          <Divider />
          <Paper elevation={5} sx={{mt:4}}>
          <Grid container columnSpacing={2} p={3}>
            <Grid size={6}>
            <Typography variant="h5" align="left" sx={{mb:1}}>
              Traffic Risk Perception of Automated Driving
            </Typography>
            <Typography variant="body1" align="left">
              One of the most difficult task in automated driving is traffic risk perception. Achieving 100% accurate system is quite difficult because of the uncertainties in the driving environment such as:
              <ul>
              <li> Obstacles in sensor occulusion </li>
              <li> Pedestrian intention </li>
              <li> Unexpedted obstacles </li>
              </ul>
              While huma drivers can deal with them using intuition, experience, and interaction with other road users.
            </Typography>
            </Grid>
            <Grid size={6}>
              <Box component="img" src={challenging_scenario} sx={{maxWidth:"99%", borderRadius:3}}/>
            </Grid>
          </Grid>
          </Paper>
        </Stack>

          <Paper elevation={5} sx={{mt:4}}>
          <Grid container columnSpacing={2} p={3}>
            <Grid size={6}>
            <Typography variant="h5" align="left" sx={{mb:1}}>
              Human-in-the-Loop Automated Driving
            </Typography>
            <Typography variant="body1" align="left">
              In automated driving, technical challenges are currently solved by control takeover by human drivers. 
              There are a lot of human-factor issues in: 
              <ul>
              <li> Stable control transition </li>
              <li> Mental model (over confidence, misuse, disuse) </li>
              <li> Situation awareness </li>
              </ul>
              The more reliable the automated systems become, the more these issues manifest and more difficult to solve. 
            </Typography>
            </Grid>
            <Grid size={6}>
              <Box component="img" src={takeover_image} sx={{maxWidth:"99%", borderRadius:3}} onClick={handleTakeoverPush(1)}/>
              <Typography> {takeover_description} </Typography>
            </Grid>
          </Grid>
          </Paper>

        <Stack container columnSpacing={2} sx={{mt:10, zIndex:1}}>
          <Box>
            <Typography variant="h4" align="left">
              Solution: Human-Automation Cooperation in Traffic Risk Perception
            </Typography>
          </Box>
          <Divider />
          <Grid container columnSpacing={2} sx={{mt:3, alignItems:"center", zIndex:1, position:"relative"}}>
            <Grid size={6}>
              <Box component="img" src={cp_diagram} sx={{maxWidth:"99%"}}/>
            </Grid>
            <Grid size={6}>
              <Box component="img" src={cp_image} sx={{maxWidth:"99%", borderRadius:3}} onClick={handleCPPush(1)}/>
              <Typography> {cp_description} </Typography>
            </Grid>
            <Grid size={12} sx={{mt:3}}>
              <Typography variant="h6" align="left">
                Proposed method <b><font color="red">Cooperative Perception</font></b> shares the perception information with the human operator and <font color="red">allows the human operator to correct mistakes in the traffic risk perception of ADS</font> instead of taking over vehicle control. Technical challenges in ADS and conventional control takeover; no control transition solves difficulty in control transition, low cognitive load for situation awareness, sharing internal states of automated system improve situation awareness and callibrate mental model. Automated system can control operator tasks (when and which target the operator checks), considering human conditions and abilities, thus realizing human-machine cooperation.
              </Typography>
            </Grid>
          </Grid>
        </Stack>

  
        <Stack container columnSpacing={2} sx={{mt:10}}>
          <Box>
            <Typography variant="h4" align="left">
              Research 1: Subject Experiment
            </Typography>
          </Box>
          <Divider />
          <Grid container spacing={3} sx={{mt:2}}>
            <Grid size={6}>
            <Paper elevation={5}>
            <Box p={2}>
              <Typography variant="h5" align="left">
                Motivation
              </Typography>
              <Typography variant="body1" align="left">
                Cooperative perception is evaluated with conventional control takeover in subjective evaluation.
                The minimum components of cooperative perception are ADS, user interface, and operator. The user interface plays two important roles, displaying the perception information to operators, and receiving the operator interventions. These two roles influence usability and how quickly and accurately an operative can perform an intervention. Therefore, the effects of display and various input methods are varidated.
              </Typography>
              <Box component="img" src={system_ui} sx={{mt:3, width:"80%"}}/>
            </Box>
            </Paper>
            </Grid>
            <Grid size={6}>
            <Paper elevation={5}>
            <Box p={2}>
              <Typography variant="h5" align="left">
                Experiment
              </Typography>
              <Typography variant="body1" align="left">
                An ADS (Autoware) and cooperative perception are implemented in the simulator environment (<a href="https://carla.org/">CARLA</a>).
                Pedestrians whose crossing intentions are difficult to predict, were selected as the operator's intervention task. Driving scenario defines intervention target and ADS behavior. 
                Four intervention methods; Baseline (control takeover), Control (Baseline + perception information display), Button (cooperative perception + button input), and Touch (cooperative perception + touch input) were evaluated in terms of driving behavior and user workload. 18 participants were recruited and 378 driving scenes were corrected.
              </Typography>
              <Box sx={{mt:3}}>
                <video src={cp_carla} autoPlay loop muted style={{width: "100%", height: "auto"}}/>
              </Box>
            </Box>
            </Paper>
            </Grid>
          </Grid>

          <Paper elevation={5} sx={{mt:3}}>
          <Box p={2}>
          <Typography variant="h5" align="left">
            Result
          </Typography>
          <Grid container spacing={3} sx={{mt:2}}>
            <Grid size={6}>
              <Grid direction="row">
                <Box component="img" src={result_min_vel} sx={{width:"90%"}}/>
                <Typography variant="body1">
                  Evaluation of driving efficiency. Percentage of drivings that passed at a higher speed than the value on the horizontal axis for pedestrians without crossing intention. 
                  
                </Typography>
              </Grid>
            </Grid>
            <Grid size={6}>
                <Box component="img" src={result_nasa_tlx} sx={{width:"99%"}}/>
                <Typography variant="body1">
                  Evaluation of usability. Results of workload assessment by NASA-TLX
                </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" align="left" sx={{mt:3}}>
            As varidation of driving performance, passing speeds for pedestrian were evaluated. The result of driving efficiency (left figure) and driving comfort showed the speriority of Touch method. Button showed excessive deceleration, while in many cases it was able to maintain high speed. Baseline and Control showed a similar trend.
            Varidation of usability (right figure) showed the superiority of cooperative perception over takeover methods.
            It was suggested that the an appropriate user interface (in this case, a touch display) manifests potential of cooperative perception. This is one of the advantages of cooperative perception; flexibility in user interface design.
          </Typography>
          </Box>
          </Paper>

        </Stack>

        <Stack container columnSpacing={2} sx={{mt:10}}>
          <Box>
            <Typography variant="h4" align="left">
              Research 2: Modeling Human Intervention Performance
            </Typography>
          </Box>
          <Divider />

          <Grid container spacing={3} sx={{mt:2}}>
            <Grid size={6}>
            <Paper elevation={5}>
            <Box p={2}>
              <Typography variant="h5" align="left">
                Motivation
              </Typography>
              <Typography variant="body1" align="left">
                Understanding human capabilities and characteristics of intervention is necessary to clarify whether humans can assist in the perception of ADS and improve its driving.
                This is also necessary for the ADS to request intervention to the operator, taking into account human capabilities, and to properly handle the operator's intervention decisions.
              </Typography>
              <Box component="img" src={system_operator} sx={{mt:3, width:"100%"}}/>
            </Box>
            </Paper>
            </Grid>
            <Grid size={6}>
            <Paper elevation={5}>
            <Box p={2}>
              <Typography variant="h5" align="left">
                Solution
              </Typography>
              <Typography variant="body1" align="left">
                The intervention capabilities are how accurate the operator can intervene, how much time is required for accurate intervention (decision-making), and how intervention tasks affect accuracy and time. 
                In the subject experiment, participants were presented with a driving scene and asked to perform the intervention (correct mistakes of risk prediction results by ADS).
11 participants were recruited and <a href="https://data.nvision2.eecs.yorku.ca/PIE_dataset/">PIE</a> dataset was used for the driving scenes.
              </Typography>
              <Box component="img" src={pie} sx={{mt:3, width:"80%", borderRadius:3}}/>
            </Box>
            </Paper>
            </Grid>
          </Grid>
          <Paper elevation={5} sx={{mt:3}}>
            <Grid container direction="row" spacing={2}>
              <Grid size={6} p={2}>
                <Typography variant="h5" align="left">
                  Result
                </Typography>
                <Typography variant="body1" align="left">
                  Traffic light classification, predicting pedestrian's crossing intention, and predicting pedestrian's future trajectory were selected as intervention tasks based on the Endsley model's situational awareness level. 
                  The figure shows the relationship between the time given for an intervention and the accuracy of the intervention.
                  The overall results showed a limitation in the human capability. However, the prediction accuracy of pedestrian crossing intention by <a href="https://github.com/aras62/PIEPredict">PIEPredict model</a> was 72%, and the traffic light classification accuracy  by the 3-layer CNN model was 93%, suggesting that human intervention can improve the recognition accuracy of the automated systems.
                  The results also showed that the time and the reliability of the intervention varies depending on the recognition task.
                </Typography>
              </Grid>
              <Grid size={6} p={2}>
                <Box component="img" src={pie_result} sx={{mt:3, width:"100%"}}/>
              </Grid>
            </Grid>
          </Paper>
        </Stack>

        <Stack container columnSpacing={2} sx={{mt:10}}>
          <Box>
            <Typography variant="h4" align="left">
              Research 3: Formulation of Human-Automation Coordination
            </Typography>
          </Box>
          <Divider />
          <Grid container spacing={3} sx={{mt:2}}>
            <Grid size={6}>
            <Paper elevation={5}>
            <Box p={2}>
              <Typography variant="h5" align="left">
                Motivation
              </Typography>
              <Typography variant="body1" align="left">
                The limited processing capacity and reliability of humans has been shown.
                To leverage human intervention in a complex and uncertain traffic environment, it is necessary to introduce a framework of human-machine cooperation.
                Human-machine coordination not only allows humans to assist automated systems, but also allows machines to complement human capabilities or reduce human workload, thereby improving the task performance as the human-machine system.
                Specific methods include task-allocation considering the capabilities of the automated system and the operator, integrating humans and machines results considering their reliability.
                These two problems, intervention request planning and integration of operator intervention results, are solved and they are demonstrated through driving experiments.
              </Typography>
              <Box component="img" src={system_cooperation} sx={{mt:3, width:"100%"}}/>
            </Box>
            </Paper>
            </Grid>
            <Grid size={6}>
            <Paper elevation={5}>
            <Box p={2}>
              <Typography variant="h5" align="left">
                Solution
              </Typography>
              <Typography variant="body1" align="left">
                Task allocation in cooperative perception is determining when and which targets the operator should intervene, based on human capabilities and traffic conditions.
This is attributed to optimization problem. 
                The integration of the operator intervention results is probabilistically evaluating and integrating the results of the decisions by the ADS and the human operator. This is attributed to Bayesian estimation.
                Since the problem is in an uncertain driving environment, the POMDP model was introduced.
                By setting the traffic risk as a belief state, the intervention request as action space, the intervention result as observation, and designing the reward to improve the driving comfort and efficiency, the two problems, intervention request planning and integration of the operator's intervention results, could be formulated in a single POMDP model.
              </Typography>
              <Box component="img" src={pomdp_state_space} sx={{display: "flex", mt:3, width:"100%"}}/>
            </Box>
            </Paper>
            </Grid>
          </Grid>

          <Paper elevation={5} sx={{mt:3}}>
          <Box p={2}>
          <Typography variant="h5" align="left">
            Result
          </Typography>
          <Grid container spacing={3} sx={{mt:2}}>
            <Grid size={12}>
              <video src={pomdp_sumo} autoPlay loop muted style={{width:"100%"}}/>
              <Typography variant="body1" align="left" sx={{mt:3}}>
                The formulated algorithm was implemented in an online optimization algorithm (<a href="https://github.com/AdaCompNUS/despot">DESPOT</a>), and evaluated with other planning methods under various traffic condition using a traffic simulator (<a href="https://sumo.dlr.de">SUMO</a>). 
                Above figure shows the demonstration of intervention request. MYOPIC method is the heuristic planning method that selects targets from closest one. 
                POMDP method (OURS) does not always selects the closest object. 
                The effect of this strategy was statistically verified in the 40,000 driving simulations below.
                The rationality of target selection through optimization, the ability to improve driving comfort and efficiency with fewer intervention requests, and the integration of intervention results have improved the reliability of traffic risk perception as a human-machine system.
              </Typography>
            </Grid>
            <Grid size={6}>
              <Grid direction="row">
                <Box component="img" src={pomdp_speed} sx={{width:"99%"}}/>
                <Typography variant="body1">
                  Passing speeds relative to obstacles with collision risk (top chunk) and without collision risk (bottom chunk). Preferable to be above or below, respectively. The superiority of OURS over MYOPIC was demonstrated.  
                </Typography>
              </Grid>
            </Grid>
            <Grid size={6}>
                <Box component="img" src={pomdp_count} sx={{width:"99%"}}/>
                <Typography variant="body1">
                Number of intervention requests relative to number of obstacles. Preferable at the bottom, showing the superiority of OURS over MYOPIC.
                </Typography>
            </Grid>
          </Grid>
          </Box>
          </Paper>

        </Stack>


        <Stack container columnSpacing={2} sx={{mt:10}}>
          <Box>
            <Typography variant="h4" align="left">
            </Typography>
          </Box>
          <Divider />
          <Box sx={{mt:2}}>
          </Box>
          <Box sx={{mt:2}}>
            <Typography variant="body1" align="left">
            </Typography>
          </Box>
        </Stack>

        <Box sx={{mt:10}}>
          <Typography variant="h4" align="left" sx={{mb:2}}>
            Defence slides 
          </Typography>
          <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQgde4kuAV3LhtkB2JZxfszAY1cOyhZTWkOPCjmfpCF65h5nKVFmQTMcWj7DMlpIMKl-iiZWcyZXeXr/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
        </Box>

        <Box sx={{mt:10}}>
          <Typography variant="h4" align="left">
            Thesis 
          </Typography>
          <iframe src="https://drive.google.com/file/d/1bXB1IdY2G-xzP52Adbwjb4CJ9RjfuNjv/preview" width="720" height="960"></iframe>
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
          <Typography variant="h3" align="left"> 
            Publication List
          </Typography>
          <Typography variant="h4" align="left"> 
            Journal
          </Typography>
          <ul>
            {journal.map((text, index) => (
              <li>
                <Typography variant="body1" align="left"> {text} </Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4" align="left"> 
            International Conference
          </Typography>
          <ul>
            {int_conference.map((text, index) => (
              <li>
                <Typography variant="body1" align="left"> {text} </Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4" align="left"> 
            Domestic Conference
          </Typography>
          <ul>
            {dom_conference.map((text, index) => (
              <li>
                <Typography variant="body1" align="left"> {text} </Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4" align="left"> 
            Award
          </Typography>
          <ul>
            {award.map((text, index) => (
              <li>
                <Typography variant="body1" align="left"> {text} </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default {PhD, Publication};
