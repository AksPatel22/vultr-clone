import React from "react";
import useStyles from "./styles";
import { Box, Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import { Add, Remove } from "@mui/icons-material";

const BlockStorage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Block Storage</Typography>
      <Box className={classes.cardContainer}>
        <Slider defaultValue={1} aria-label="Default" min={1} max={1000} />
        <Box className={classes.infoContainer}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "40%" }}>
            <Typography sx={{ fontSize: "24px" }}>Price:</Typography>
            <Typography sx={{ color: "blue", fontSize: "28px" }}>
              $1.00/month
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", width: "40%" }}>
            <Typography sx={{ fontSize: "24px" }}>Storage:</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Add />
              <Typography sx={{ fontSize: "28px" }}>10 GB</Typography>
              <Remove />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlockStorage;
