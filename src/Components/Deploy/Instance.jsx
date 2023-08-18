import React from "react";
import useStyles from "./styles";
import { Box, Card, Grid, Typography } from "@mui/material";

const Instance = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Typography className={classes.heading}>
        Deploy an instance with Vultr
      </Typography>
      <Typography className={classes.subHeading}>
        Over <b> 45 million </b> instances deployed by thousands of clients
      </Typography>
      <Grid container className={classes.gridContainer} justifyContent="center">
        <Grid xs={12} sm={12} md={3} lg={3} className={classes.gridItem}>
          <Card className={classes.card}>
            <img
              src="https://www.vultr.com/dist/img/icons/152/production.svg"
              alt="img"
              className={classes.cardImg}
            />
            <Typography className={classes.cardHeading}>
              Cloud Complete
            </Typography>
            <Typography className={classes.cardDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis totam sed quas
            </Typography>
            <Typography className={classes.cardPricing}>
              Explore our API
            </Typography>
          </Card>
        </Grid>
        {/* <ArrowForwardIcon className={classes.arrowIcon} /> */}
        <Grid xs={12} sm={12} md={3} lg={3} className={classes.gridItem}>
          <Card className={classes.card}>
            <img
              src="https://www.vultr.com/dist/img/icons/152/production.svg"
              alt="img"
              className={classes.cardImg}
            />

            <Typography className={classes.cardHeading}>
              Cloud Complete
            </Typography>
            <Typography className={classes.cardDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis totam sed quas
            </Typography>
            <Typography className={classes.cardPricing}>
              Explore our API
            </Typography>
          </Card>
        </Grid>
        {/* <ArrowForwardIcon className={classes.arrowIcon} /> */}
        <Grid xs={12} sm={12} md={3} lg={3} className={classes.gridItem}>
          <Card className={classes.card}>
            <img
              src="https://www.vultr.com/dist/img/icons/152/production.svg"
              alt="img"
              className={classes.cardImg}
            />

            <Typography className={classes.cardHeading}>
              Cloud Complete
            </Typography>
            <Typography className={classes.cardDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis totam sed quas
            </Typography>
            <Typography className={classes.cardPricing}>
              Explore our API
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1903 556"
        className={classes.blueSVG}
      >
        <defs>
          <linearGradient
            id="banner-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#021048", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#1e38a3", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          className="svg-banner-shape"
          d="M753.1,434.2c110.6,63.7,277.7,70.6,373.4,15.4L1905,0v555.9H0V0.2L753.1,434.2z"
          fill="url(#banner-gradient)"
        />
      </svg>
    </Box>
  );
};

export default Instance;
