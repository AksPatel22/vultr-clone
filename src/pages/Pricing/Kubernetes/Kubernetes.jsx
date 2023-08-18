import React from "react";
import useStyles from "./styles";
import { Box, Typography } from "@mui/material";

const Kubernetes = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Kubernetes Engine</Typography>
      <Typography className={classes.subTitle}>
        Vultr Kubernetes Engine provides the control plane free of charge. In
        comparison, the Big Tech clouds typically charge at least $70 per month
        for the control plane in their managed Kubernetes services.
      </Typography>
      <Typography className={classes.subTitle}>
        When using Vultr Kubernetes Engine, you only pay for underlying worker
        nodes, as well as associated resources, e.g. Block Storage and Load
        Balancers.
      </Typography>
    </Box>
  );
};

export default Kubernetes;
