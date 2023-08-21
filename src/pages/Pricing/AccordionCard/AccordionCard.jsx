import React from "react";
import useStyles from "./styles";
import { Box, Typography } from "@mui/material";

const AccordionCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography className={classes.text}>1 vCPU</Typography>
        <Typography className={classes.text}>0.5 GB Memory</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography className={classes.text}>0.5 TB Bandwidth</Typography>
        <Typography className={classes.text}>10 GB Storage</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography className={classes.text} sx={{ color: "#007bfc" }}>
          $2.5/mo
        </Typography>
        <Typography className={classes.text} sx={{ color: "#007bfc" }}>
          $0.004/hr
        </Typography>
      </Box>
    </Box>
  );
};

export default AccordionCard;
