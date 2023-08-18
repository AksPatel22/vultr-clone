import React from "react";
import useStyles from "./styles";
import { Box, Button, Typography } from "@mui/material";

const About = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.container} display="flex" flexDirection="column">
        <Typography variant="h2" className={classes.heading}>
          More Cloud, Less Money.
        </Typography>
        <Typography variant="h6" className={classes.subHeading}>
          Vultr offers globally available, enterprise-grade infrastructure, for
          just a fraction the cost of the Big Tech clouds.
        </Typography>
        <Box className={classes.formContainer}>
          <Button variant="contained" className={classes.btn}>
            Create Account
          </Button>
          <Button variant="outlined" className={classes.btn}>
            Contact Sales
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
