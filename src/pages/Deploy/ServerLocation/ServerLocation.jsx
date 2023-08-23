import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import image from "../../../assets/card.svg";
import CheckIcon from "@mui/icons-material/Check";

const ServerLocation = () => {
  const classes = useStyles();
  const data = ["", "", "", "", "", "", "", "", "", ""];
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState("All Locations");
  const locations = [
    "All Locations",
    "America",
    "Europe",
    "Australia",
    "Asia",
    "Africa",
  ];

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
        {locations.map((location) => {
          return (
            <Typography
              className={
                activeTab === location ? classes.activeTab : classes.location
              }
              onClick={() => setActiveTab(location)}
            >
              {location}
            </Typography>
          );
        })}
      </Box>
      <Grid container spacing={5}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <Card
                className={active === index ? classes.activeCard : classes.card}
                onClick={() => handleActive(index)}
              >
                <CardContent className={classes.cardContent}>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                  >
                    <img src={image} alt="" className={classes.cardImg} />
                    <Typography className={classes.cardTitle}>
                      Mumbai
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                    India
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
    </Box>
  );
};

export default ServerLocation;
