import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useStyles from "./styles";
import Checkbox from "@mui/material/Checkbox";

const CreditCard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>
        Make a Credit Card Payment
      </Typography>
      <Box className={classes.formContainer}>
        <form>
          <TextField label="Your Name" name="name" fullWidth margin="normal" />
          <TextField
            label="Billing Address"
            name="email"
            fullWidth
            margin="normal"
          />
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <TextField
                  label="Billing City"
                  name="email"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Country/Region</InputLabel>
                  <Select name="gender">
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={4}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>State/Province</InputLabel>
                  <Select name="gender" variant="outlined">
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <TextField
                label="Billing Postal Code"
                name="email"
                fullWidth
                margin="normal"
              />
            </Grid>
          </Grid>
        </form>
      </Box>
      <Typography className={classes.subTitle}>Credit Card Details</Typography>
      <Box className={classes.creditCardForm}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <TextField
              label="Card Number"
              name="email"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <TextField label="MM/YY" name="email" fullWidth margin="normal" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <TextField label="CVV" name="email" fullWidth margin="normal" />
          </Grid>
        </Grid>
      </Box>
      <Typography className={classes.subTitle}>Choose Amount</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <FormControlLabel control={<Checkbox />} />
        <Typography>
          I just want to link my credit card{" "}
          <span style={{ fontWeight: "500" }}> - $0.00 deposit </span>
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Card className={classes.priceCard}>
            <Typography className={classes.cardPrice}>$10</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Card className={classes.priceCard}>
            <Typography className={classes.cardPrice}>$25</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Card className={classes.priceCardActive}>
            <Typography className={classes.cardPriceActive}>$50</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Card className={classes.priceCard}>
            <Typography className={classes.cardPrice}>$100</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Card className={classes.priceCard}>
            <Typography className={classes.cardPrice}>$250</Typography>
          </Card>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Card className={classes.priceCard}>
            <Typography className={classes.cardPrice}>other</Typography>
          </Card>
        </Grid>
      </Grid>
      <Typography className={classes.btn}>Link Credit Card</Typography>
    </Box>
  );
};

export default CreditCard;
