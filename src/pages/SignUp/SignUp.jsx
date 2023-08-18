import React from "react";
import useStyles from "./styles";
import { Box, Button, TextField, Typography, IconButton } from "@mui/material";
import { GitHub, Google } from "@mui/icons-material";

const SignUp = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Typography className={classes.mainHeading}>VULTR</Typography>
      <Box className={classes.formContainer}>
        <form>
          <Typography className={classes.heading}>Create Account</Typography>
          <Typography className={classes.subHeading}>
            You're moments away from launching a blazing fast SSD Cloud Server.
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, height: "3rem" }}
          >
            Create free account
          </Button>
          <Box className={classes.or}>
            <Typography>or</Typography>
          </Box>
          <Box className={classes.iconContainer}>
            <IconButton className={classes.iconBox} aria-label="github">
              <GitHub className={classes.icon} />
              <Typography className={classes.iconText}>Github</Typography>
            </IconButton>
            <IconButton aria-label="google" className={classes.iconBox}>
              <Google className={classes.icon} />
              <Typography className={classes.iconText}>Google</Typography>
            </IconButton>
          </Box>
        </form>
        <Typography sx={{ textAlign: "center", color: "#555" }}>
          Already a member
          <span style={{ color: "#007bfc" }}>Log In</span>
        </Typography>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1903 556"
        className={classes.whiteSvg}
      >
        <path
          class="svg-banner-shape"
          fill="#fff"
          d="M753.1,434.2c110.6,63.7,277.7,70.6,373.4,15.4L1905,0v555.9H0V0.2L753.1,434.2z"
        ></path>
      </svg>
    </Box>
  );
};

export default SignUp;
