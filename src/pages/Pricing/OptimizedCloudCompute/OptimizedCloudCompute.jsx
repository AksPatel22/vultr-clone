import React from "react";
import useStyles from "./styles";
import CustomTable from "../../../Components/Table/customTable";
import {
  cloudComputeRegularPerformance,
  cloudComputeHighPerformanceAMD,
  cloudComputeHighFrequency,
} from "../../../Components/tabledata";
import { Box, Typography } from "@mui/material";
import icon from "../../../assets/card.svg";

const OptimizedCloudCompute = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Optimized Cloud Compute</Typography>
      <Typography className={classes.subTitle}>
        These virtual machines run atop fully dedicated, new generation AMD EPYC
        vCPUs. Dedicated vCPUs ensure that these machines deliver the fast,
        consistent performance that many business applications require.
      </Typography>

      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>General Purpose</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        Often a good starting point, these VMs provide a typical balance of CPU,
        RAM, and NVMe SSD resources.
      </Typography>
      <Typography className={classes.subHeading}>
        <b> Use cases:</b> web and application servers, E-Commerce, game
        servers, video and audio streaming, API serving, relational databases
      </Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>CPU Optimized</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        For compute bound applications, these VMs provide proportionally more
        CPU than they do RAM and NVMe SSD.
      </Typography>
      <Typography className={classes.subHeading}>
        <b> Use cases: </b>video encoding, batch processing, CI/CD, high
        performance computing (HPC), ad serving, analytics processing
      </Typography>
      <CustomTable rows={cloudComputeHighPerformanceAMD} />
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>Memory Optimized</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        For memory bound applications, these VMs provide proportionally more RAM
        than they do CPU and NVMe SSD.
      </Typography>
      <Typography className={classes.subHeading}>
        <b> Use cases: </b> open source databases e.g. MySQL, in-memory
        databases and caches (e.g. Memcached), real-time analytics
      </Typography>
      <CustomTable rows={cloudComputeHighFrequency} />
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>Storage Optimized</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        These VMs provide especially generous amounts of NVMe SSD storage to
        accompany a typical balance of CPU and RAM.
      </Typography>
      <Typography className={classes.subHeading}>
        <b> Use cases: </b> large nonrelational databases e.g. Cassandra and
        MongoDB, high frequency online transaction processing (OLTP)
      </Typography>
      <CustomTable rows={cloudComputeHighFrequency} />
    </Box>
  );
};

export default OptimizedCloudCompute;
