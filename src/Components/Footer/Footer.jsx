import { Box, Grid, Typography, Card } from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  CustomAccordionSummary,
} from "./CustomAccordion";

const Footer = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.linkContainer}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={2} lg={2} className={classes.gridItem}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Card className={classes.card}>
                <Typography className={classes.heading}>Products</Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} className={classes.gridItem}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Card className={classes.card}>
                <Typography className={classes.heading}>Products</Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} className={classes.gridItem}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Card className={classes.card}>
                <Typography className={classes.heading}>Products</Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} className={classes.gridItem}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Card className={classes.card}>
                <Typography className={classes.heading}>Products</Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} className={classes.gridItem}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Card className={classes.card}>
                <Typography className={classes.heading}>Products</Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2} lg={2} className={classes.gridItem}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Card className={classes.card}>
                <Typography className={classes.heading}>Products</Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
                <Typography className={classes.subHeading}>
                  Cloud Compute
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.accordionContainer}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <CustomAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography ml={2} className={classes.accordionHeading}>
              One-Click Deploy
            </Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <CustomAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography ml={2} className={classes.accordionHeading}>
              One-Click Deploy
            </Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <CustomAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography ml={2} className={classes.accordionHeading}>
              One-Click Deploy
            </Typography>
          </CustomAccordionSummary>
          <AccordionDetails>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
            <Typography className={classes.accordionSummary}>
              The Vultr control panel
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box className={classes.socialLinksContainer}>
        <Typography color="#aaa">
          Over 45,000,000 Cloud Servers Launched
        </Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item>
              <Facebook
                color="primary"
                fontSize="large"
                className={classes.socialIcon}
              />
            </Grid>
            <Grid item>
              <Twitter
                color="primary"
                fontSize="large"
                className={classes.socialIcon}
              />
            </Grid>
            <Grid item>
              <Instagram
                color="primary"
                fontSize="large"
                className={classes.socialIcon}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
