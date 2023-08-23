import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import image from "../../../assets/card.svg";
import CheckIcon from "@mui/icons-material/Check";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const ServerType = () => {
  const classes = useStyles();
  const data = ["", "", "", ""];
  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <Box>
      <Typography className={classes.title}>Server Type</Typography>
      <Grid container spacing={5}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Card
                className={active === index ? classes.activeCard : classes.card}
                onClick={() => handleActive(index)}
              >
                <CardContent className={classes.cardContent}>
                  <img src={image} alt="" className={classes.cardImg} />
                  <Typography className={classes.cardTitle}>
                    General Purpose
                  </Typography>
                  <QuestionMarkIcon className={classes.questionIcon} />
                  {active === index && (
                    <div className={classes.topBtn}>
                      <CheckIcon className={classes.checkIcon} />
                    </div>
                  )}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ServerType;
