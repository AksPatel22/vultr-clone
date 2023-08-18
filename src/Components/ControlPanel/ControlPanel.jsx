import React, { useState } from "react";
import useStyles from "./styles";
import { Box, Button, Typography } from "@mui/material";
import accordion from "../../assets/accordion.svg";
import {
  Accordion,
  AccordionDetails,
  CustomAccordionSummary,
} from "./CustomAccordion";

const ControlPanel = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => {
    setExpanded(panel);
  };

  const images = {
    panel1:
      "https://www.vultr.com/dist/img/control-panel/home__one-click-deploy-center.png",
    panel2:
      "https://www.vultr.com/dist/img/control-panel/home__powerful-api-center.png",
    panel3:
      "https://www.vultr.com/dist/img/control-panel/home__easy-manage-center.png",
  };
  return (
    <Box className={classes.mainContainer}>
      <Typography className={classes.heading}>
        Powerful Control Panel & APIs
      </Typography>
      <Typography className={classes.subHeading}>
        Spend more time coding and less time managing your infrastructure.
      </Typography>
      <Box className={classes.container}>
        <Box className={classes.accordionContainer}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={() => handleChange("panel1")}
            sx={{ margin: "2rem" }}
          >
            <CustomAccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <img src={accordion} alt="" height="25px" width="25px" />
              <Typography ml={2} className={classes.accordionHeading}>
                One-Click Deploy
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordionSummary}>
                The Vultr control panel makes server management simple and
                intuitive. Common tasks such as a ordering servers, managing
                backups, and adjusting access control are only a few clicks
                away.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={() => handleChange("panel2")}
            sx={{ margin: "2rem" }}
          >
            <CustomAccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <img src={accordion} alt="" height="25px" width="25px" />
              <Typography ml={2} className={classes.accordionHeading}>
                One-Click Deploy
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordionSummary}>
                Bring automation to the forefront of your business using Vultr's
                API. Any action that you can perform on Vultr can be automated
                into your systems.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={() => handleChange("panel3")}
            sx={{ margin: "2rem" }}
          >
            <CustomAccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <img src={accordion} alt="" height="25px" width="25px" />
              <Typography ml={2} className={classes.accordionHeading}>
                One-Click Deploy
              </Typography>
            </CustomAccordionSummary>
            <AccordionDetails>
              <Typography className={classes.accordionSummary}>
                As soon as you click deploy, the Vultr cloud orchestration takes
                over and spins up your instance in your desired datacenters -
                typically within 60 seconds.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Button variant="outlined" className={classes.btn}>
            Control Panel features
          </Button>
        </Box>
        <Box className={classes.imgContainer}>
          {Object.keys(images).map((panel) => (
            <img
              key={panel}
              src={images[panel]}
              className={`${classes.img} ${
                expanded === panel ? classes.imgVisible : ""
              }`}
              alt={panel}
            />
          ))}
        </Box>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1903 556"
        className={classes.whiteSVG}
      >
        <path
          class="svg-banner-shape"
          d="M753.1,434.2c110.6,63.7,277.7,70.6,373.4,15.4L1905,0v555.9H0V0.2L753.1,434.2z"
          fill="#fff"
        ></path>
      </svg>
    </Box>
  );
};

export default ControlPanel;
