import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Publications() {
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
            {journal.map((text) => (
              <li>
                <Typography variant="body1" align="left"> {text} </Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4" align="left"> 
            International Conference
          </Typography>
          <ul>
            {int_conference.map((text) => (
              <li>
                <Typography variant="body1" align="left"> {text} </Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4" align="left"> 
            Domestic Conference
          </Typography>
          <ul>
            {dom_conference.map((text) => (
              <li>
                <Typography variant="body1" align="left"> {text} </Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h4" align="left"> 
            Award
          </Typography>
          <ul>
            {award.map((text) => (
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

export default Publications;
