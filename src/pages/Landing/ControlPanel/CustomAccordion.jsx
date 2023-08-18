import React from "react";
import { styled } from "@mui/system";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  boxShadow: "2px 1px 20px 2px rgba(210,210,210,0.75) ",
  borderRadius: "5px",
  "&:before": {
    display: "none",
  },
  "@media (max-width:950px)": {
    boxShadow: "none",
    backgroundColor: "transparent !important",
    border: "1px solid #999",
    color: "white",
  },
}));

export const CustomAccordionSummary = styled(MuiAccordionSummary)(
  ({ theme }) => ({
    backgroundColor: "white",
    borderRadius: "5px",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      display: "none",
    },
    "& .MuiAccordionSummary-expandIconWrapper": {
      display: "none",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
    "@media (max-width:950px)": {
      backgroundColor: "transparent !important",
    },
  })
);

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  marginLeft: "15%",
}));
