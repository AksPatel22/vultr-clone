import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import TextField from "@mui/material/TextField";
import tech from "../../assets/card.svg";

const About = () => {
  const classes = useStyles();
  const data = ["", "", "", ""];

  return (
    <>
      <Box className={classes.mainContainer}>
        <Box
          className={classes.container}
          display="flex"
          flexDirection="column"
        >
          <Typography variant="h2" className={classes.heading}>
            The Everywhere Cloud
          </Typography>
          <Typography variant="h6" className={classes.subHeading}>
            Instantly deploy High Performance Cloud Servers, Cloud GPUs, Bare
            Metal, and Cloud Storage worldwide.
          </Typography>
          <Box className={classes.formContainer}>
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              className={classes.input}
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              className={classes.input}
            />
            <Button variant="contained" className={classes.btn}>
              Create Account
            </Button>
          </Box>
        </Box>
        <Grid
          container
          className={classes.gridContainer}
          justifyContent="center"
        >
          {data.map((item) => {
            return (
              <Grid xs={12} sm={12} md={6} lg={3} className={classes.gridItem}>
                <Card className={classes.card}>
                  <img src={tech} alt="" className={classes.cardSVG} />
                  <Typography className={classes.cardHeading}>
                    Cloud Complete
                  </Typography>
                  <Typography className={classes.cardDesc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis totam sed quas
                  </Typography>
                  <Typography className={classes.cardPricing}>
                    Starting at $2/month
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1903 556"
          className={classes.whiteSVG}
        >
          <path
            class="svg-banner-shape"
            fill="#fff"
            d="M753.1,434.2c110.6,63.7,277.7,70.6,373.4,15.4L1905,0v555.9H0V0.2L753.1,434.2z"
          ></path>
        </svg>
      </Box>
    </>
  );
};

export default About;
