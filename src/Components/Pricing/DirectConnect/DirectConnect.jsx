import React from "react";
import useStyles from "./styles";
import { Box, Typography } from "@mui/material";
import CustomTable from "../Common/Table/customTable";
import { cloudComputeHighPerformanceAMD } from "../tabledata";

const DirectConnect = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Direct Connect</Typography>
      <Typography className={classes.subTitle}>
        Privately connect Vultr to other cloud service providers, colocation
        facilities, or on-premises data centers.
      </Typography>
      <CustomTable rows={cloudComputeHighPerformanceAMD} />
    </Box>
  );
};

export default DirectConnect;
