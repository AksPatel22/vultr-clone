import React, { useState } from "react";
import useStyles from "./styles";
import CustomTable from "../../../Components/Table/customTable";
import { cloudComputeRegularPerformance } from "../../../Components/tabledata";
import { Box, Typography } from "@mui/material";
import icon from "../../../assets/card.svg";
import {
  Accordion,
  AccordionDetails,
  CustomAccordionSummary,
} from "../CustomAccordion";
import AccordionCard from "../AccordionCard/AccordionCard";

const Databases = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Databases</Typography>
      <Typography className={classes.subTitle}>
        Databases that 'just work' right out of the box. Quickly deploy a new
        database cluster while letting us manage the configuration, updates, and
        end-to-end security, so you can stay focused on your app.
      </Typography>
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>MySQL</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        MySQL - the world's most popular open source relational database. MySQL
        stores and retrieves data of all sizes for your business' applications.{" "}
      </Typography>
      <Typography className={classes.subCategory}>
        Optimized Cloud Compute
      </Typography>
      <Typography className={classes.subcategory}>General Purpose</Typography>
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
      <Typography className={classes.subcategory}>Storage Optimized</Typography>
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
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subCategory}>Cloud Compute</Typography>
      <Typography className={classes.subcategory}>
        High Performance (AMD or Intel)
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
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subcategory}>
        Regular Performance
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
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>PostgreSQL</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        MySQL - the world's most popular open source relational database. MySQL
        stores and retrieves data of all sizes for your business' applications.{" "}
      </Typography>
      <Typography className={classes.subCategory}>
        Optimized Cloud Compute
      </Typography>
      <Typography className={classes.subcategory}>General Purpose</Typography>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
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
      <Typography className={classes.subcategory}>Storage Optimized</Typography>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
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
      <Typography className={classes.subCategory}>Cloud Compute</Typography>
      <Typography className={classes.subcategory}>
        High Performance (AMD or Intel)
      </Typography>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
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
      <Typography className={classes.subcategory}>
        Regular Performance
      </Typography>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
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
    </Box>
  );
};

export default Databases;
