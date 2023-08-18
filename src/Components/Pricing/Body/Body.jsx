import { Box } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import CardComponent from "../Common/Card/Card";
import CloudCompute from "../CloudCompute/CloudCompute";
import OptimizedCloudCompute from "../OptimizedCloudCompute/OptimizedCloudCompute";
import CloudGpu from "../CloudGpu/CloudGpu";
import BareMetal from "../BareMetal/BareMetal";
import DirectConnect from "../DirectConnect/DirectConnect";
import Kubernetes from "../Kubernetes/Kubernetes";
import Databases from "../Databases/Databases";
import BlockStorage from "../BlockStorage/BlockStorage";
import ObjectStorage from "../ObjectStorage/ObjectStorage";
import LoadBalancers from "../LoadBalancers/LoadBalancers";

const Body = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.leftContainer}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Box>
      <Box className={classes.rightContainer}>
        <CloudCompute />
        <OptimizedCloudCompute />
        <CloudGpu />
        <BareMetal />
        <DirectConnect />
        <Kubernetes />
        <Databases />
        <BlockStorage />
        <ObjectStorage />
        <LoadBalancers />
      </Box>
    </Box>
  );
};

export default Body;
