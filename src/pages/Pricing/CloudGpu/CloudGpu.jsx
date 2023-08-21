import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import CustomTable from "../../../Components/Table/customTable";
import {
  cloudComputeHighPerformanceAMD,
  cloudComputeHighFrequency,
  cloudComputeHighPerformanceIntel,
} from "../../../Components/tabledata";
import icon from "../../../assets/card.svg";
import {
  Accordion,
  AccordionDetails,
  CustomAccordionSummary,
} from "../CustomAccordion";
import AccordionCard from "../AccordionCard/AccordionCard";

const CloudGpu = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Cloud GPU</Typography>
      <Typography className={classes.subTitle}>
        Vultr makes accelerated computing affordable and easy to use. In just
        minutes, provision VMs with fractional, full, or multiple NVIDIA GPUs.
      </Typography>
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>NVIDIA HGX H100</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        Designed specifically for AI and HPC workloads, featuring
        fourth-generation Tensor Cores and the Transformer Engine with FP8
        precision for accelerated performance.
      </Typography>
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>NVIDIA A100</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        Delivering unprecedented acceleration and powering the world's
        highest-performing AI, data analytics, and HPC workloads.
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <CustomAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography ml={2} className={classes.subCategory}>
            Pricing
          </Typography>
        </CustomAccordionSummary>
        <AccordionDetails>
          <AccordionCard />
          <AccordionCard />
          <AccordionCard />
          <AccordionCard />
        </AccordionDetails>
      </Accordion>
      <CustomTable rows={cloudComputeHighPerformanceAMD} />
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>NVIDIA A40</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        Combining professional graphics with powerful compute and AI, to meet
        today's design, creative, and scientific challenges.
      </Typography>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <CustomAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography ml={2} className={classes.subCategory}>
            Pricing
          </Typography>
        </CustomAccordionSummary>
        <AccordionDetails>
          <AccordionCard />
          <AccordionCard />
          <AccordionCard />
          <AccordionCard />
        </AccordionDetails>
      </Accordion>
      <CustomTable rows={cloudComputeHighPerformanceIntel} />
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>NVIDIA A16</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        Enabling virtual desktops and workstations with the power and
        performance to tackle any project from anywhere.
      </Typography>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <CustomAccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography ml={2} className={classes.subCategory}>
            Pricing
          </Typography>
        </CustomAccordionSummary>
        <AccordionDetails>
          <AccordionCard />
          <AccordionCard />
          <AccordionCard />
          <AccordionCard />
        </AccordionDetails>
      </Accordion>
      <CustomTable rows={cloudComputeHighFrequency} />
    </Box>
  );
};

export default CloudGpu;
