import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import CustomTable from "../../../Components/Table/customTable";
import {
  cloudComputeRegularPerformance,
  cloudComputeHighPerformanceAMD,
  cloudComputeHighPerformanceIntel,
  cloudComputeHighFrequency,
} from "../../../Components/tabledata";
import icon from "../../../assets/card.svg";
import {
  Accordion,
  AccordionDetails,
  CustomAccordionSummary,
} from "../CustomAccordion";
import AccordionCard from "../AccordionCard/AccordionCard";

const CloudCompute = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Cloud Compute</Typography>
      <Typography className={classes.subTitle}>
        These virtual machines run atop shared vCPUs, and are suitable for many
        business and personal applications: low traffic websites, blogs, CMS,
        dev/test environments, small databases, and much more.
      </Typography>
      <Typography className={classes.subTitle}>
        Choose High Performance or High Frequency plans for the newer
        generations of AMD or Intel CPUs, along with NVMe SSD.{" "}
      </Typography>
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>Regular Performance</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        Powered by previous generation Intel CPUs and regular SSD.
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
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>High Performance</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        Powered by new generations of AMD EPYC or Intel Xeon CPUs and NVMe SSD.
      </Typography>
      <Typography
        className={classes.subCategory}
        sx={{
          "@media (max-width:1100px)": {
            display: "none",
          },
        }}
      >
        AMD Pricing
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
            AMD Pricing
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
      <Typography
        className={classes.subCategory}
        sx={{
          "@media (max-width:1100px)": {
            display: "none",
          },
        }}
      >
        Intel Pricing
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
            Intel Pricing
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
        <Typography className={classes.heading}>High Frequency</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        Powered by 3GHz+ Intel Xeon CPUs and NVMe SSD.
      </Typography>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
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

export default CloudCompute;
