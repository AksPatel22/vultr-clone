import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { data } from "./feature";
import Tooltip from "@mui/material/Tooltip";
import { Box, Button, Grid, Typography } from "@mui/material";
import useStyles from "./styles";
import city from "../../../assets/city.png";

const markers = [
  { markerOffset: -15, name: "Mumbai", coordinates: [72.8777, 19.076] },
  { markerOffset: -15, name: "Delhi", coordinates: [77.1025, 28.7041] },
  { markerOffset: -15, name: "Shanghai", coordinates: [121.4737, 31.2304] },
  { markerOffset: -15, name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { markerOffset: -15, name: "New York", coordinates: [-74.006, 40.7128] },
  { markerOffset: -15, name: "London", coordinates: [-0.1278, 51.5074] },
  { markerOffset: -15, name: "Paris", coordinates: [2.3522, 48.8566] },
  { markerOffset: -15, name: "Moscow", coordinates: [37.6173, 55.7558] },
  { markerOffset: -15, name: "Beijing", coordinates: [116.4074, 39.9042] },
  { markerOffset: -15, name: "Cairo", coordinates: [31.2357, 30.0444] },
  { markerOffset: -15, name: "Rome", coordinates: [12.4964, 41.9028] },
  { markerOffset: -15, name: "Berlin", coordinates: [13.405, 52.52] },
  { markerOffset: -15, name: "Sydney", coordinates: [151.2093, -33.8688] },
  { markerOffset: -15, name: "Istanbul", coordinates: [28.9784, 41.0082] },
  {
    markerOffset: -15,
    name: "Rio de Janeiro",
    coordinates: [-43.1729, -22.9068],
  },
];

const Locations = () => {
  const Data = ["", "", "", "", "", "", "", "", "", "", ""];

  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.heading}>
          Develop locally, deploy globally®
        </Typography>
        <Typography className={classes.subHeading}>
          32 worldwide locations
        </Typography>
        <Box className={classes.summary}>
          <Typography className={classes.summaryHeading}>32</Typography>
          <Typography className={classes.summaryHeading}>locations</Typography>
        </Box>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 130,
          }}
        >
          <Geographies geography={data}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EAEAEC"
                  stroke="#D6D6DA"
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates }) => (
            <Marker key={name} coordinates={coordinates}>
              <Tooltip
                title={
                  <Box className={classes.tooltipContainer}>
                    <img
                      src={city}
                      alt={name}
                      style={{ width: "60px", height: "60px" }}
                    />
                    <p style={{ color: "black", fontSize: "16px" }}>{name}</p>
                    <a href="#home" target="_blank" rel="noopener noreferrer">
                      speed test
                    </a>
                  </Box>
                }
              >
                <circle r={5} fill="#00F" stroke="#fff" strokeWidth={2} />
              </Tooltip>
            </Marker>
          ))}
        </ComposableMap>
        <Button variant="outlined" className={classes.exploreBtn}>
          Explore locations
        </Button>
      </Box>
      <Box className={classes.smallContainer}>
        <Typography className={classes.heading}>
          Develop locally, deploy globally®
        </Typography>
        <Typography className={classes.subHeading}>
          32 worldwide locations
        </Typography>

        <Grid container spacing={2} sx={{ padding: "0 2rem" }}>
          {Data.map((item) => {
            return (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                lg={3}
                xl={3} // Added for extra-large screens
                className={classes.gridItem}
              >
                <Box className={classes.cardsContainer}>
                  <img
                    src={city}
                    alt="name"
                    style={{ width: "60px", height: "60px" }}
                  />
                  <p style={{ color: "black", fontSize: "16px" }}>name</p>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Button variant="outlined" className={classes.exploreBtn}>
          Explore locations
        </Button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1903 556">
          {/* Define the gradient */}
          <defs>
            <linearGradient
              id="banner-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#021048", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#1e38a3", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          {/* Apply the gradient to the path */}
          <path
            className="svg-banner-shape"
            d="M753.1,434.2c110.6,63.7,277.7,70.6,373.4,15.4L1905,0v555.9H0V0.2L753.1,434.2z"
            fill="url(#banner-gradient)"
          />
        </svg>
      </Box>
    </>
  );
};

export default Locations;
