import React, { useState } from "react";
import {
  Box,
  Card,
  Grid,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import useStyles from "./styles";
import PropTypes from "prop-types";
import CreditCard from "./CreditCard/CreditCard";
import Paypal from "./Paypal/Paypal";
import Alipay from "./Alipay/Alipay";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Billing = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.mainContainer}>
      <Typography className={classes.title}>Billing</Typography>
      <Box className={classes.container}>
        <Box className={classes.tabContainer}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
          >
            <Tab label="Credit Card" {...a11yProps(0)} />
            <Tab label="Paypal" {...a11yProps(1)} />
            <Tab label="Crypto" {...a11yProps(2)} />
            <Tab label="Alipay" {...a11yProps(3)} />
            <Tab label="Wire Transfer" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <Box className={classes.paymentContainer}>
          <Box className={classes.paymentInfo}>
            <TabPanel value={value} index={0}>
              <CreditCard />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Paypal />
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Alipay />
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
          </Box>
          <Box className={classes.paymentSummary}>
            <Typography className={classes.summaryTitle}>Summary</Typography>
            <Card className={classes.summaryContainer}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6} lg={9}>
                    <TextField
                      label="Enter Code"
                      name="email"
                      fullWidth
                      margin="normal"
                      sx={{ height: "3rem" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3}>
                    <Box className={classes.btn}>
                      <Typography
                        sx={{
                          fontSize: "20px ",
                          fontWeight: "500",
                        }}
                      >
                        Apply
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>
                  Total Billed to Credit Card
                </Typography>
                <Typography sx={{ color: "#007bfc", fontWeight: "500" }}>
                  +$10.00
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>
                  Total Available Credit
                </Typography>
                <Typography sx={{ color: "#007bfc", fontWeight: "500" }}>
                  $10.00
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Billing;
