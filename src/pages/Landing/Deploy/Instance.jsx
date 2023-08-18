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
    </Box>
  );
};

export default Instance;
