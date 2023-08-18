import React from "react";
import useStyles from "./styles";
import { Box, Card, Grid, Typography } from "@mui/material";

const BareMetal = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.Title}>Bare Metal</Typography>
      <Typography className={classes.subTitle}>
        These machines provide direct access to the full power of the underlying
        physical hardware without a virtualization layer. On our platform,
        you'll be in the driver's seat of a real, physical server, with the
        convenience and simplicity of Vultr automation. Bare metal servers are
        also single-tenant only which means that only you will have full access
        to the resources of your server.
      </Typography>
      <Typography className={classes.heading}>
        NVIDIA GPU + Intel CPU Compute
      </Typography>
      <Grid
        container
        className={classes.gridContainer}
        justifyContent="center"
        sx={{ gap: "2rem" }}
      >
        <Grid
          xs={12}
          sm={12}
          md={3}
          lg={3}
          className={classes.gridItem}
          sx={{ justifyContent: "right" }}
        >
          <Card className={classes.card}>
            {/* <Typography className={classes.cardHeading}>
              AI,Data Analytics, and HPC
            </Typography> */}
            <Typography className={classes.cardTitle}>
              4 X NVIDIA A100 80GB
            </Typography>
            <Typography className={classes.cardPricing}>$7000/month</Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x 480 GB</b> SSD
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>6 x 1.6 TB</b> NVMe
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x </b> Intel Gold 6248R
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>48</b> cores/ <b>96</b> threads @ 2.8GHz
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>512 GB</b> Memory
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>15 TB</b> Bandwidth
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>25 Gbps</b> Network
            </Typography>
          </Card>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={3}
          lg={3}
          className={classes.gridItem}
          sx={{ justifyContent: "left" }}
        >
          <Card className={classes.card}>
            {/* <Typography className={classes.cardHeading}>
              AI,Data Analytics, and HPC
            </Typography> */}
            <Typography className={classes.cardTitle}>
              4 X NVIDIA A100 80GB
            </Typography>
            <Typography className={classes.cardPricing}>$7000/month</Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x 480 GB</b> SSD
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>6 x 1.6 TB</b> NVMe
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x </b> Intel Gold 6248R
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>48</b> cores/ <b>96</b> threads @ 2.8GHz
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>512 GB</b> Memory
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>15 TB</b> Bandwidth
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>25 Gbps</b> Network
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Typography className={classes.heading}>CPU Compute</Typography>
      <Grid container className={classes.gridContainer} justifyContent="center">
        <Grid xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <Card
            className={classes.card}
            sx={{ border: "none", borderRadius: "0px" }}
          >
            {/* <Typography className={classes.cardHeading}>
              AI,Data Analytics, and HPC
            </Typography> */}
            <Typography className={classes.cardTitle}>
              4 X NVIDIA A100 80GB
            </Typography>
            <Typography className={classes.cardPricing}>$7000/month</Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x 480 GB</b> SSD
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>6 x 1.6 TB</b> NVMe
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x </b> Intel Gold 6248R
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>48</b> cores/ <b>96</b> threads @ 2.8GHz
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>512 GB</b> Memory
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>15 TB</b> Bandwidth
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>25 Gbps</b> Network
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <Card
            className={classes.card}
            sx={{ border: "none", borderRadius: "0px" }}
          >
            {/* <Typography className={classes.cardHeading}>
              AI,Data Analytics, and HPC
            </Typography> */}
            <Typography className={classes.cardTitle}>
              4 X NVIDIA A100 80GB
            </Typography>
            <Typography className={classes.cardPricing}>$7000/month</Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x 480 GB</b> SSD
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>6 x 1.6 TB</b> NVMe
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x </b> Intel Gold 6248R
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>48</b> cores/ <b>96</b> threads @ 2.8GHz
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>512 GB</b> Memory
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>15 TB</b> Bandwidth
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>25 Gbps</b> Network
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <Card
            className={classes.card}
            sx={{ border: "none", borderRadius: "0px" }}
          >
            {/* <Typography className={classes.cardHeading}>
              AI,Data Analytics, and HPC
            </Typography> */}
            <Typography className={classes.cardTitle}>
              4 X NVIDIA A100 80GB
            </Typography>
            <Typography className={classes.cardPricing}>$7000/month</Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x 480 GB</b> SSD
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>6 x 1.6 TB</b> NVMe
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x </b> Intel Gold 6248R
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>48</b> cores/ <b>96</b> threads @ 2.8GHz
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>512 GB</b> Memory
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>15 TB</b> Bandwidth
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>25 Gbps</b> Network
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <Card
            className={classes.card}
            sx={{ border: "none", borderRadius: "0px" }}
          >
            {/* <Typography className={classes.cardHeading}>
              AI,Data Analytics, and HPC
            </Typography> */}
            <Typography className={classes.cardTitle}>
              4 X NVIDIA A100 80GB
            </Typography>
            <Typography className={classes.cardPricing}>$7000/month</Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x 480 GB</b> SSD
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>6 x 1.6 TB</b> NVMe
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x </b> Intel Gold 6248R
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>48</b> cores/ <b>96</b> threads @ 2.8GHz
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>512 GB</b> Memory
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>15 TB</b> Bandwidth
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>25 Gbps</b> Network
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <Card
            className={classes.card}
            sx={{ border: "none", borderRadius: "0px" }}
          >
            {/* <Typography className={classes.cardHeading}>
              AI,Data Analytics, and HPC
            </Typography> */}
            <Typography className={classes.cardTitle}>
              4 X NVIDIA A100 80GB
            </Typography>
            <Typography className={classes.cardPricing}>$7000/month</Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x 480 GB</b> SSD
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>6 x 1.6 TB</b> NVMe
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x </b> Intel Gold 6248R
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>48</b> cores/ <b>96</b> threads @ 2.8GHz
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>512 GB</b> Memory
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>15 TB</b> Bandwidth
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>25 Gbps</b> Network
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <Card
            className={classes.card}
            sx={{ border: "none", borderRadius: "0px" }}
          >
            {/* <Typography className={classes.cardHeading}>
              AI,Data Analytics, and HPC
            </Typography> */}
            <Typography className={classes.cardTitle}>
              4 X NVIDIA A100 80GB
            </Typography>
            <Typography className={classes.cardPricing}>$7000/month</Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x 480 GB</b> SSD
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>6 x 1.6 TB</b> NVMe
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x </b> Intel Gold 6248R
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>48</b> cores/ <b>96</b> threads @ 2.8GHz
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>512 GB</b> Memory
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>15 TB</b> Bandwidth
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>25 Gbps</b> Network
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <Card
            className={classes.card}
            sx={{ border: "none", borderRadius: "0px" }}
          >
            {/* <Typography className={classes.cardHeading}>
              AI,Data Analytics, and HPC
            </Typography> */}
            <Typography className={classes.cardTitle}>
              4 X NVIDIA A100 80GB
            </Typography>
            <Typography className={classes.cardPricing}>$7000/month</Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x 480 GB</b> SSD
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>6 x 1.6 TB</b> NVMe
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x </b> Intel Gold 6248R
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>48</b> cores/ <b>96</b> threads @ 2.8GHz
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>512 GB</b> Memory
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>15 TB</b> Bandwidth
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>25 Gbps</b> Network
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4} lg={3} className={classes.gridItem}>
          <Card
            className={classes.card}
            sx={{ border: "none", borderRadius: "0px" }}
          >
            {/* <Typography className={classes.cardHeading}>
              AI,Data Analytics, and HPC
            </Typography> */}
            <Typography className={classes.cardTitle}>
              4 X NVIDIA A100 80GB
            </Typography>
            <Typography className={classes.cardPricing}>$7000/month</Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x 480 GB</b> SSD
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>6 x 1.6 TB</b> NVMe
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>2 x </b> Intel Gold 6248R
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>48</b> cores/ <b>96</b> threads @ 2.8GHz
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>512 GB</b> Memory
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>15 TB</b> Bandwidth
            </Typography>
            <Typography className={classes.cardDesc}>
              <b>25 Gbps</b> Network
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BareMetal;
