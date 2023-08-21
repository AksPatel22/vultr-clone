import React, { useState } from "react";
import useStyles from "./styles";
import { Box, Typography } from "@mui/material";
import CustomTable from "../../../Components/Table/customTable";
import { cloudComputeHighPerformanceAMD } from "../../../Components/tabledata";
import AccordionCard from "../AccordionCard/AccordionCard";
import {
  AccordionDetails,
  Accordion,
  CustomAccordionSummary,
} from "../CustomAccordion";

const DirectConnect = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Direct Connect</Typography>
      <Typography className={classes.subTitle}>
        Privately connect Vultr to other cloud service providers, colocation
        facilities, or on-premises data centers.
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
    </Box>
  );
};

export default DirectConnect;
