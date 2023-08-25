import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import useStyles from "./styles";
import image from "../../../assets/card.svg";
import CheckIcon from "@mui/icons-material/Check";
import PropTypes from "prop-types";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ServerLocation = () => {
  const classes = useStyles();
  const data = ["", "", "", "", "", "", "", "", "", ""];
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const locations = [
    "All Locations",
    "America",
    "Europe",
    "Australia",
    "Asia",
    "Africa",
  ];

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <Box>
      <Typography className={classes.title}>Server Location</Typography>
      <Box
        sx={{
          display: "flex",
          gap: "1.5rem",
          margin: "1.5rem 0",
          flexWrap: "wrap",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {locations.map((location, index) => {
            return (
              <Tab
                label={location}
                {...a11yProps({ index })}
                key={index}
                className={classes.location}
              />
            );
          })}
        </Tabs>
      </Box>
      {locations.map((location, index) => {
        return (
          <CustomTabPanel value={activeTab} index={index}>
            <Grid container spacing={5}>
              {data.map((item, index) => {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                    <Card
                      className={
                        active === index ? classes.activeCard : classes.card
                      }
                      onClick={() => handleActive(index)}
                    >
                      <CardContent className={classes.cardContent}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                          }}
                        >
                          <img src={image} alt="" className={classes.cardImg} />
                          <Typography className={classes.cardTitle}>
                            {location}
                          </Typography>
                        </Box>
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "400" }}
                        >
                          {location}
                        </Typography>
                        {active === index && (
                          <div className={classes.topBtn}>
                            <CheckIcon className={classes.checkIcon} />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </CustomTabPanel>
        );
      })}
    </Box>
  );
};

export default ServerLocation;
