import React from "react";
import useStyles from "./styles";
import { Box, Card, Grid, Typography } from "@mui/material";

const Insights = () => {
  const classes = useStyles();

  return (
    <Box classname={classes.mainContainer}>
      <Typography className={classes.heading}>Insights & resources</Typography>
      <Typography className={classes.subHeading}>
        Insights and resources to help drive your business forward faster.
      </Typography>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridItem}>
          <Grid container spacing={2} className={classes.subGrid}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Card className={classes.subCard}>
                <svg
                  class="icon-sm icon-sm--64"
                  alt="FAQs"
                  version="1.1"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.SVG}
                >
                  <path
                    class="fill-gradient stroke-gradient"
                    d="M22.2,28c-0.7,0.3,0.3,14.9,0.3,14.9l-6.9,11.2c0,0-3.8-5.1-3.8-5L7.5,51V19.2l32-18.7v17.8L22.2,28z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m23.5 28.6-0.1 30.5s-3.3-5.1-3.4-5.1-4.4 2.3-4.5 2.4v-32.2l32-18.7v8.6l-24 14.5z"
                  ></path>
                  <path
                    class="stroke-dark"
                    d="m55.5 42.2c-0.7 0.3-16.7 9.9-17.1 10.1-0.1 0.1-6.9 11.2-6.9 11.2s-3.8-5.1-3.8-5l-4.2 2.1v-32l32-18.7v32.3z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m40.7 44.8c0.3-0.2 0.6-0.4 0.7-0.8 0.2-0.3 0.2-0.7 0.3-1 0-0.2 0-0.5-0.2-0.6-0.1-0.1-0.3 0-0.5 0.1-0.3 0.2-0.6 0.4-0.7 0.8-0.2 0.3-0.2 0.7-0.3 1 0 0.2 0 0.5 0.2 0.6 0.1 0.1 0.3 0 0.5-0.1z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m44.8 28.3c0-1.4-0.3-2.4-0.9-2.8s-1.5-0.3-2.6 0.4c-1.2 0.7-2.2 1.7-2.8 2.9-0.6 1.1-1 2.3-1.1 3.5l1.3-0.8c0.1-1.6 1-3.1 2.4-3.9 0.3-0.2 0.7-0.3 1.1-0.4 0.3 0 0.5 0.1 0.7 0.3 0.5 0.5 0.7 1.3 0.6 2 0 1.1-0.3 2.2-0.8 3.2l-1.3 2.5c-0.4 0.8-0.8 1.6-1 2.5l-0.3 2.1 1.3-0.7c0-1.2 0.2-2.3 0.7-3.4l1.1-2c1-1.7 1.5-3.6 1.6-5.4z"
                  ></path>
                </svg>
                <Typography>FAQ</Typography>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.subGrid}
            >
              <Card className={classes.subCard}>
                <svg
                  class="icon-sm icon-sm--64"
                  alt="FAQs"
                  version="1.1"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.SVG}
                >
                  <path
                    class="fill-gradient stroke-gradient"
                    d="M22.2,28c-0.7,0.3,0.3,14.9,0.3,14.9l-6.9,11.2c0,0-3.8-5.1-3.8-5L7.5,51V19.2l32-18.7v17.8L22.2,28z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m23.5 28.6-0.1 30.5s-3.3-5.1-3.4-5.1-4.4 2.3-4.5 2.4v-32.2l32-18.7v8.6l-24 14.5z"
                  ></path>
                  <path
                    class="stroke-dark"
                    d="m55.5 42.2c-0.7 0.3-16.7 9.9-17.1 10.1-0.1 0.1-6.9 11.2-6.9 11.2s-3.8-5.1-3.8-5l-4.2 2.1v-32l32-18.7v32.3z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m40.7 44.8c0.3-0.2 0.6-0.4 0.7-0.8 0.2-0.3 0.2-0.7 0.3-1 0-0.2 0-0.5-0.2-0.6-0.1-0.1-0.3 0-0.5 0.1-0.3 0.2-0.6 0.4-0.7 0.8-0.2 0.3-0.2 0.7-0.3 1 0 0.2 0 0.5 0.2 0.6 0.1 0.1 0.3 0 0.5-0.1z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m44.8 28.3c0-1.4-0.3-2.4-0.9-2.8s-1.5-0.3-2.6 0.4c-1.2 0.7-2.2 1.7-2.8 2.9-0.6 1.1-1 2.3-1.1 3.5l1.3-0.8c0.1-1.6 1-3.1 2.4-3.9 0.3-0.2 0.7-0.3 1.1-0.4 0.3 0 0.5 0.1 0.7 0.3 0.5 0.5 0.7 1.3 0.6 2 0 1.1-0.3 2.2-0.8 3.2l-1.3 2.5c-0.4 0.8-0.8 1.6-1 2.5l-0.3 2.1 1.3-0.7c0-1.2 0.2-2.3 0.7-3.4l1.1-2c1-1.7 1.5-3.6 1.6-5.4z"
                  ></path>
                </svg>
                <Typography>FAQ</Typography>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.subGrid}
            >
              <Card className={classes.subCard}>
                <svg
                  class="icon-sm icon-sm--64"
                  alt="FAQs"
                  version="1.1"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.SVG}
                >
                  <path
                    class="fill-gradient stroke-gradient"
                    d="M22.2,28c-0.7,0.3,0.3,14.9,0.3,14.9l-6.9,11.2c0,0-3.8-5.1-3.8-5L7.5,51V19.2l32-18.7v17.8L22.2,28z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m23.5 28.6-0.1 30.5s-3.3-5.1-3.4-5.1-4.4 2.3-4.5 2.4v-32.2l32-18.7v8.6l-24 14.5z"
                  ></path>
                  <path
                    class="stroke-dark"
                    d="m55.5 42.2c-0.7 0.3-16.7 9.9-17.1 10.1-0.1 0.1-6.9 11.2-6.9 11.2s-3.8-5.1-3.8-5l-4.2 2.1v-32l32-18.7v32.3z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m40.7 44.8c0.3-0.2 0.6-0.4 0.7-0.8 0.2-0.3 0.2-0.7 0.3-1 0-0.2 0-0.5-0.2-0.6-0.1-0.1-0.3 0-0.5 0.1-0.3 0.2-0.6 0.4-0.7 0.8-0.2 0.3-0.2 0.7-0.3 1 0 0.2 0 0.5 0.2 0.6 0.1 0.1 0.3 0 0.5-0.1z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m44.8 28.3c0-1.4-0.3-2.4-0.9-2.8s-1.5-0.3-2.6 0.4c-1.2 0.7-2.2 1.7-2.8 2.9-0.6 1.1-1 2.3-1.1 3.5l1.3-0.8c0.1-1.6 1-3.1 2.4-3.9 0.3-0.2 0.7-0.3 1.1-0.4 0.3 0 0.5 0.1 0.7 0.3 0.5 0.5 0.7 1.3 0.6 2 0 1.1-0.3 2.2-0.8 3.2l-1.3 2.5c-0.4 0.8-0.8 1.6-1 2.5l-0.3 2.1 1.3-0.7c0-1.2 0.2-2.3 0.7-3.4l1.1-2c1-1.7 1.5-3.6 1.6-5.4z"
                  ></path>
                </svg>
                <Typography>FAQ</Typography>
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.subGrid}
            >
              <Card className={classes.subCard}>
                <svg
                  class="icon-sm icon-sm--64"
                  alt="FAQs"
                  version="1.1"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  className={classes.SVG}
                >
                  <path
                    class="fill-gradient stroke-gradient"
                    d="M22.2,28c-0.7,0.3,0.3,14.9,0.3,14.9l-6.9,11.2c0,0-3.8-5.1-3.8-5L7.5,51V19.2l32-18.7v17.8L22.2,28z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m23.5 28.6-0.1 30.5s-3.3-5.1-3.4-5.1-4.4 2.3-4.5 2.4v-32.2l32-18.7v8.6l-24 14.5z"
                  ></path>
                  <path
                    class="stroke-dark"
                    d="m55.5 42.2c-0.7 0.3-16.7 9.9-17.1 10.1-0.1 0.1-6.9 11.2-6.9 11.2s-3.8-5.1-3.8-5l-4.2 2.1v-32l32-18.7v32.3z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m40.7 44.8c0.3-0.2 0.6-0.4 0.7-0.8 0.2-0.3 0.2-0.7 0.3-1 0-0.2 0-0.5-0.2-0.6-0.1-0.1-0.3 0-0.5 0.1-0.3 0.2-0.6 0.4-0.7 0.8-0.2 0.3-0.2 0.7-0.3 1 0 0.2 0 0.5 0.2 0.6 0.1 0.1 0.3 0 0.5-0.1z"
                  ></path>
                  <path
                    class="fill-primary stroke-primary"
                    d="m44.8 28.3c0-1.4-0.3-2.4-0.9-2.8s-1.5-0.3-2.6 0.4c-1.2 0.7-2.2 1.7-2.8 2.9-0.6 1.1-1 2.3-1.1 3.5l1.3-0.8c0.1-1.6 1-3.1 2.4-3.9 0.3-0.2 0.7-0.3 1.1-0.4 0.3 0 0.5 0.1 0.7 0.3 0.5 0.5 0.7 1.3 0.6 2 0 1.1-0.3 2.2-0.8 3.2l-1.3 2.5c-0.4 0.8-0.8 1.6-1 2.5l-0.3 2.1 1.3-0.7c0-1.2 0.2-2.3 0.7-3.4l1.1-2c1-1.7 1.5-3.6 1.6-5.4z"
                  ></path>
                </svg>
                <Typography>FAQ</Typography>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridItem}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Card className={classes.card}>
              <img
                src="https://www.vultr.com/vultr-news-graphics/vultr/2023-07/DO-Blog.png"
                alt=""
                className={classes.cardImg}
              />
              <Typography className={classes.cardHeading}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur similique necessitatibus quis provident doloremqu
              </Typography>
              <Typography className={classes.cardDesc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur similique necessitatibus quis provident doloremque
                libero, ratione obcaecati ea consectetur eius, quo quaerat
                magni, esse ducimus. Itaque tempore unde incidunt soluta?
              </Typography>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Insights;
