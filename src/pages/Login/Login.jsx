import React from "react";
import useStyles from "./styles";
import { Box, Button, TextField, Typography, IconButton } from "@mui/material";
import { Lock, GitHub, Google } from "@mui/icons-material";

const Login = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Typography className={classes.mainHeading}>VULTR</Typography>
      <Box className={classes.formContainer}>
        <Typography className={classes.heading}>Welcome Back</Typography>
        <form>
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
          <Typography className={classes.forgot}>Forgot Password?</Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Box className={classes.or}>or</Box>
          <Box className={classes.iconContainer}>
            <IconButton className={classes.iconBox} aria-label="key">
              <Lock className={classes.icon} />
            </IconButton>
            <IconButton className={classes.iconBox} aria-label="github">
              <GitHub className={classes.icon} />
            </IconButton>
            <IconButton aria-label="google" className={classes.iconBox}>
              <Google className={classes.icon} />
            </IconButton>
          </Box>
          <Typography sx={{ textAlign: "center" }}>
            Don't have an account yet?{" "}
            <span style={{ color: "blue" }}>Sign Up</span>
          </Typography>
        </form>
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

export default Login;
