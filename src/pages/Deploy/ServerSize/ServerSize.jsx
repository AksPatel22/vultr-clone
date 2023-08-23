import React, { useState } from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import CheckIcon from "@mui/icons-material/Check";

const ServerSize = () => {
  const classes = useStyles();
  const data = ["", "", "", "", "", "", "", "", "", "", "", ""];
  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <Box>
      <Typography className={classes.title}>Server Size</Typography>
      <Grid container spacing={5}>
        {data.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <Card
                className={active === index ? classes.activeCard : classes.card}
                onClick={() => handleActive(index)}
              >
                <CardContent className={classes.cardContent}>
                  <Typography className={classes.cardTitle}>
                    30 GB NVMe
                  </Typography>
                  <Typography
                    className={classes.price}
                    sx={{ fontSize: "22px" }}
                  >
                    <span style={{ fontWeight: "500", fontSize: "26px" }}>
                      $30
                    </span>
                    /month
                  </Typography>
                  <Typography sx={{ fontSize: "14px", color: "#999" }}>
                    $0.045/hour
                  </Typography>
                  <Box
                    sx={{
                      width: "20%",
                      height: "2px",
                      backgroundColor: "#007bfc",
                      margin: "1rem 0",
                    }}
                  ></Box>
                  <Typography sx={{ fontSize: "14px" }}>
                    <span style={{ fontWeight: "600" }}>1</span> vCPU
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    <span style={{ fontWeight: "600" }}>4 GB</span> Memory
                  </Typography>
                  <Typography sx={{ fontSize: "14px" }}>
                    <span style={{ fontWeight: "600" }}>4 TB</span> Bandwidth
                  </Typography>
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

export default ServerSize;
