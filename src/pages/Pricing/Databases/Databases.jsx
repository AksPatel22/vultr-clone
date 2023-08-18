import React from "react";
import useStyles from "./styles";
import CustomTable from "../../../Components/Table/customTable";
import { cloudComputeRegularPerformance } from "../../../Components/tabledata";
import { Box, Typography } from "@mui/material";

const Databases = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Databases</Typography>
      <Typography className={classes.subTitle}>
        Databases that 'just work' right out of the box. Quickly deploy a new
        database cluster while letting us manage the configuration, updates, and
        end-to-end security, so you can stay focused on your app.
      </Typography>
      <Typography className={classes.heading}>MySQL</Typography>
      <Typography className={classes.subHeading}>
        MySQL - the world's most popular open source relational database. MySQL
        stores and retrieves data of all sizes for your business' applications.{" "}
      </Typography>
      <Typography className={classes.subCategory}>
        Optimized Cloud Compute
      </Typography>
      <Typography className={classes.subCategory}>General Purpose</Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subCategory}>Storage Optimized</Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subCategory}>Cloud Compute</Typography>
      <Typography className={classes.subCategory}>
        High Performance (AMD or Intel)
      </Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subCategory}>
        Regular Performance
      </Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.heading}>PostgreSQL</Typography>
      <Typography className={classes.subHeading}>
        MySQL - the world's most popular open source relational database. MySQL
        stores and retrieves data of all sizes for your business' applications.{" "}
      </Typography>
      <Typography className={classes.subCategory}>
        Optimized Cloud Compute
      </Typography>
      <Typography className={classes.subCategory}>General Purpose</Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subCategory}>Storage Optimized</Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subCategory}>Cloud Compute</Typography>
      <Typography className={classes.subCategory}>
        High Performance (AMD or Intel)
      </Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subCategory}>
        Regular Performance
      </Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
    </Box>
  );
};

export default Databases;
