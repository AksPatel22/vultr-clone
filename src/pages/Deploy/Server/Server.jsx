import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import image from "../../../assets/card.svg";
import CheckIcon from "@mui/icons-material/Check";

const Server = () => {
  const classes = useStyles();
  const data = ["", "", "", ""];
  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <Box>
      <Typography className={classes.title}>Choose Server</Typography>
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
                    Optimized Cloud Compute
                  </Typography>
                  <Typography className={classes.cardDesc}>
                    Virtual machines for more demanding business apps, e.g.
                    production websites, CI/CD, video transcoding, or larger
                    databases.
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontSize: "12px" }}>
                        Starting from
                      </Typography>
                      <Typography sx={{ fontSize: "14px", fontWeight: "500" }}>
                        $28.00/mo
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        backgroundColor: "#007bfc",
                        color: "white",
                        height: "max-content",
                        padding: "0.2rem",
                        borderRadius: "5px",
                        fontSize: "12px",
                      }}
                    >
                      Dedicated vCPU
                    </Typography>
                  </Box>
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

export default Server;
