import React from "react";
import useStyles from "./styles";
import { Box, Card, Grid, Typography } from "@mui/material";

const LoadBalancers = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Load Balancers</Typography>
      <Grid container className={classes.gridContainer} justifyContent="center">
        <Grid xs={12} sm={12} md={12} lg={12} className={classes.gridItem}>
          <Card
            className={classes.card}
            sx={{ border: "none", borderRadius: "0px" }}
          >
            <Typography className={classes.cardTitle}>
              Load Balancers
            </Typography>
            <Typography className={classes.cardPricing}>$10.00/mo</Typography>
            <Typography>$0.015/hr</Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoadBalancers;
