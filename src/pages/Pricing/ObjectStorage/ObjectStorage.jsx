import React from "react";
import useStyles from "./styles";
import { Box, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";

const ObjectStorage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Object Storage</Typography>
      <Box className={classes.cardContainer}>
        <Box className={classes.left}>
          <Box className={classes.card}>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "500", marginBottom: "1rem" }}
            >
              Flexible pricing
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "0.5rem",
              }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                Storage
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "500", color: "#007bfc" }}
              >
                1 TB Selected
              </Typography>
            </Box>
            <Slider
              defaultValue={1}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
            />
          </Box>
          <Box className={classes.card}>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "500", marginBottom: "1rem" }}
            >
              Flexible pricing
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "0.5rem",
              }}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                Storage
              </Typography>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "500", color: "#007bfc" }}
              >
                1 TB Selected
              </Typography>
            </Box>
            <Slider
              defaultValue={1}
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
            />
          </Box>
        </Box>
        <Box className={classes.right}>
          <Typography sx={{ fontWeight: "500", fontSize: "20px" }}>
            Object Storage
          </Typography>
          <Typography sx={{ fontSize: "26px", color: "#007bfc" }}>
            $5.00/month
          </Typography>
          <Typography>
            <b> 1 TB </b> of Storage
          </Typography>
          <Typography>
            <b> 1 TB </b> of Bandwidth
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            $5 per additional TB stored
          </Typography>
          <Typography sx={{ fontSize: "12px" }}>
            $10 per additional TB transferred
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ObjectStorage;
