import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import image from "../../../assets/card.svg";
import CheckIcon from "@mui/icons-material/Check";

const ServerImage = () => {
  const classes = useStyles();
  const data = ["", "", "", "", "", "", "", "", "", ""];
  const [active, setActive] = useState(null);
  const [activeTab, setActiveTab] = useState("Operating Systems");
  const locations = [
    "Operating Systems",
    "MarketPlace Apps",
    "Upload ISO",
    "ISO Library",
    "Backup",
    "Snapshot",
  ];

  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <Box>
      <Typography className={classes.title}>Server Image</Typography>
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
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Card
                className={active === index ? classes.activeCard : classes.card}
                onClick={() => handleActive(index)}
              >
                <CardContent className={classes.cardContent}>
                  <img src={image} alt="" className={classes.cardImg} />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography className={classes.cardTitle}>
                      Mumbai
                    </Typography>
                    <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
                      India
                    </Typography>
                  </Box>
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

export default ServerImage;
