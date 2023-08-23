import { Box, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import useStyles from "./styles";
import Server from "./Server/Server";
import ServerType from "./ServerType/ServerType";
import ServerLocation from "./ServerLocation/ServerLocation";
import ServerImage from "./ServerImage/ServerImage";
import ServerSize from "./ServerSize/ServerSize";
import { CustomizedSwitches } from "./customSwitch";
import image from "../../assets/card.svg";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Deploy = () => {
  const classes = useStyles();
  return (
    <Box sx={{ padding: "1rem" }}>
      <Typography className={classes.title}>Deploy New Instance</Typography>
      <Server />
      <ServerType />
      <ServerLocation />
      <ServerImage />
      <ServerSize />
      <Typography className={classes.subTitle}>
        Add Auto Backups{" "}
        <span
          style={{
            fontSize: "12px",
            backgroundColor: "#007bfc",
            padding: "0.2rem",
            borderRadius: "5px",
            color: "white",
            fontWeight: "300",
          }}
        >
          RECOMMENDED
        </span>
      </Typography>
      <Typography className={classes.desc}>
        Vultr offers automatic backup, which we highly recommend for
        mission-critical systems. Once backed up, you can easily recover from
        disaster by spinning up a new instance from a saved image.
      </Typography>
      <Card className={classes.card}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomizedSwitches />
          <Typography sx={{ fontWeight: "500" }}>Enable</Typography>
          <Typography sx={{ fontWeight: "500", color: "#007bfc" }}>
            Auto Backups
          </Typography>
          <Typography
            sx={{
              backgroundColor: "rgba(0, 123, 252,0.3)",
              fontSize: "12px",
              height: "16px",
              padding: "0.1rem",
              color: "#007bfc",
            }}
          >
            $6.00/mo
          </Typography>
          <img src={image} alt="" height="60px" />
        </Box>
      </Card>
      <Typography className={classes.subTitle}>Additional Features</Typography>
      <Box className={classes.formContainer}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Enable IPv6"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="No Public IPv4 Address"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Enable DDOS Protection"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Enable Cloud-Init User-Data"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Enable Virtual Private Clouds"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Enable VPC 2.0"
          />
        </FormGroup>
      </Box>
      <Typography className={classes.subTitle}>
        SSH Keys{" "}
        <span style={{ color: "#007bfc", fontSize: "18px" }}>(Manage)</span>
      </Typography>
      <Card
        sx={{
          display: "flex",
          border: "1px dashed #aaa",
          width: "10rem",
          padding: "1rem",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "1rem",
          boxShadow: "none",
          "&:hover": {
            border: "1px dashed #007bfc",
          },
        }}
      >
        <AddCircleOutlineIcon />
        <Typography>Add New</Typography>
      </Card>
      <Typography className={classes.subTitle}>
        Server Hostname & Label
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            id="outlined-basic"
            label="Enter server hostname"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            id="outlined-basic"
            label="Enter server label"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Deploy;
