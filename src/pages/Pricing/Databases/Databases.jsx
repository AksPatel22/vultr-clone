import React from "react";
import useStyles from "./styles";
import CustomTable from "../../../Components/Table/customTable";
import { cloudComputeRegularPerformance } from "../../../Components/tabledata";
import { Box, Typography } from "@mui/material";
import icon from "../../../assets/card.svg";

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
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>MySQL</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        MySQL - the world's most popular open source relational database. MySQL
        stores and retrieves data of all sizes for your business' applications.{" "}
      </Typography>
      <Typography className={classes.subCategory}>
        Optimized Cloud Compute
      </Typography>
      <Typography className={classes.subcategory}>General Purpose</Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subcategory}>Storage Optimized</Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subCategory}>Cloud Compute</Typography>
      <Typography className={classes.subcategory}>
        High Performance (AMD or Intel)
      </Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subcategory}>
        Regular Performance
      </Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <img src={icon} alt="" />
        <Typography className={classes.heading}>PostgreSQL</Typography>
      </Box>
      <Typography className={classes.subHeading}>
        MySQL - the world's most popular open source relational database. MySQL
        stores and retrieves data of all sizes for your business' applications.{" "}
      </Typography>
      <Typography className={classes.subCategory}>
        Optimized Cloud Compute
      </Typography>
      <Typography className={classes.subcategory}>General Purpose</Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subcategory}>Storage Optimized</Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subCategory}>Cloud Compute</Typography>
      <Typography className={classes.subcategory}>
        High Performance (AMD or Intel)
      </Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
      <Typography className={classes.subcategory}>
        Regular Performance
      </Typography>
      <CustomTable rows={cloudComputeRegularPerformance} />
    </Box>
  );
};

export default Databases;
