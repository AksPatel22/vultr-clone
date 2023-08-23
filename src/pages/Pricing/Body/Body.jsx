import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import CardComponent from "../../../Components/Card/Card";
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
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Body = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.menuBtnContainer}>
        <MenuIcon
          fontSize="large"
          color="primary"
          sx={{ cursor: "pointer", paddingLeft: "10%" }}
          onClick={() => setIsOpen(!isOpen)}
        />
        <Typography
          sx={{
            fontWeight: "500",
          }}
        >
          Categories
        </Typography>
      </Box>
      <Box className={isOpen ? classes.sideBar : classes.hidden}>
        <Box
          sx={{
            width: "100%",
            borderBottom: "1px solid #bbb",
            display: "flex",
            flexDirection: "row-reverse",
            position: "relative",
          }}
        >
          <CloseIcon
            onClick={() => setIsOpen(false)}
            sx={{
              fontSize: "2rem",
            }}
          />
        </Box>
        <Box className={classes.sideBarContainer}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Box>
      </Box>
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
