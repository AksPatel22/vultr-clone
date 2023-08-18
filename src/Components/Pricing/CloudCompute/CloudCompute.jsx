import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import CustomTable from "../Common/Table/customTable";
import {
  cloudComputeRegularPerformance,
  cloudComputeHighPerformanceAMD,
  cloudComputeHighPerformanceIntel,
  cloudComputeHighFrequency,
} from "../tabledata";

const CloudCompute = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Cloud Compute</Typography>
      <Typography className={classes.subTitle}>
        These virtual machines run atop shared vCPUs, and are suitable for many
        business and personal applications: low traffic websites, blogs, CMS,
        dev/test environments, small databases, and much more.
      </Typography>
      <Typography className={classes.subTitle}>
        Choose High Performance or High Frequency plans for the newer
        generations of AMD or Intel CPUs, along with NVMe SSD.{" "}
      </Typography>
      <Typography className={classes.heading}>Regular Performance</Typography>
      <Typography className={classes.subHeading}>
        Powered by previous generation Intel CPUs and regular SSD.
      </Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.heading}>High Performance</Typography>
      <Typography className={classes.subHeading}>
        Powered by new generations of AMD EPYC or Intel Xeon CPUs and NVMe SSD.
      </Typography>
      <Typography className={classes.subCategory}>AMD Pricing</Typography>
      <CustomTable rows={cloudComputeHighPerformanceAMD} />
      <Typography className={classes.subCategory}>Intel Pricing</Typography>
      <CustomTable rows={cloudComputeHighPerformanceIntel} />
      <Typography className={classes.heading}>High Frequency</Typography>
      <Typography className={classes.subHeading}>
        Powered by 3GHz+ Intel Xeon CPUs and NVMe SSD.
      </Typography>
      <CustomTable rows={cloudComputeHighFrequency} />
    </Box>
  );
};

export default CloudCompute;
