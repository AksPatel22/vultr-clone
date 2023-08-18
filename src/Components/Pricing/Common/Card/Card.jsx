import { Box, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import card from "../../../../assets/card.svg";

const CardComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <img src={card} alt="" className={classes.cardImg} />
      <Box>
        <Typography className={classes.cardTitle}>Cloud Compute</Typography>
        <Typography className={classes.cardSubTitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
          consequatur.
        </Typography>
      </Box>
    </Box>
  );
};

export default CardComponent;
