import React from "react";
import useStyles from "./styles";
import { Box, Card, Typography } from "@mui/material";
import icon from "../../../assets/card.svg";

const Services = () => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.container} display="flex" flexDirection="column">
        <Typography variant="h2" className={classes.heading}>
          Add-on Services
        </Typography>
        <Typography variant="h6" className={classes.subHeading}>
          Billing for additional add-on services
        </Typography>
        <Box className={classes.cardsContainer}>
          <Box className={classes.cardContainer}>
            <Card className={classes.leftCard}>
              <img src={icon} alt="" className={classes.img} />
              <Typography sx={{ fontWeight: "500", fontSize: "20px" }}>
                Documentation
              </Typography>
            </Card>
            <Card className={classes.leftCard}>
              <img src={icon} alt="" className={classes.img} />
              <Typography sx={{ fontWeight: "500", fontSize: "20px" }}>
                Documentation
              </Typography>
            </Card>
          </Box>
          <Box className={classes.faqContainer}>
            <Card
              className={classes.rightCard}
              sx={{
                borderRight: "1px solid #666",
                "@media (max-width:1100px)": {
                  borderRight: "none",
                },
              }}
            >
              <Typography
                sx={{
                  textAlign: "left",
                  width: "100%",
                  borderBottom: "1px solid black",
                  padding: "1rem",
                  marginLeft: "2rem",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                FAQ
              </Typography>
              <Box
                sx={{
                  textAlign: "left",
                  width: "100%",
                  padding: "1rem",
                  marginLeft: "1rem",
                  overflowY: "scroll",
                }}
              >
                <Typography
                  sx={{
                    color: "#666",
                    "&:hover": {
                      color: "var(--text-blue)",
                    },
                    margin: "0.5rem 0",
                  }}
                >
                  Is pricing the same in all data center locations?
                </Typography>

                <Typography
                  sx={{
                    color: "#666",
                    "&:hover": {
                      color: "var(--text-blue)",
                    },
                    margin: "0.5rem 0",
                  }}
                >
                  Is pricing the same in all data center locations?
                </Typography>
                <Typography
                  sx={{
                    color: "#666",
                    "&:hover": {
                      color: "var(--text-blue)",
                    },
                    margin: "0.5rem 0",
                  }}
                >
                  Is pricing the same in all data center locations?
                </Typography>
                <Typography
                  sx={{
                    color: "#666",
                    "&:hover": {
                      color: "var(--text-blue)",
                    },
                    margin: "0.5rem 0",
                  }}
                >
                  Is pricing the same in all data center locations?
                </Typography>
                <Typography
                  sx={{
                    color: "#666",
                    "&:hover": {
                      color: "var(--text-blue)",
                    },
                    margin: "0.5rem 0",
                  }}
                >
                  Is pricing the same in all data center locations?
                </Typography>
                <Typography
                  sx={{
                    color: "#666",
                    "&:hover": {
                      color: "var(--text-blue)",
                    },
                    margin: "0.5rem 0",
                  }}
                >
                  Is pricing the same in all data center locations?
                </Typography>
              </Box>
            </Card>
            <Card className={classes.rightCard}>
              <Typography
                sx={{ margin: "1rem", fontWeight: "500", fontSize: "20px" }}
              >
                Is pricing the same in all data center locations?
              </Typography>
              <Typography sx={{ margin: "1rem", fontSize: "16px" }}>
                At Vultr, we attempt to keep cloud pricing as consistent as
                possible globally. However, due to variation in regional costs
                (such as networking, hardware, labor, taxes, and fees), certain
                global data center locations may have different per hour and per
                month pricing for Vultr cloud services. Current data center
                location pricing is always available in the Control Panel.
              </Typography>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
