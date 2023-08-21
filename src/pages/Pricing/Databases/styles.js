// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    // maxHeight: "100vh !important",
    backgroundColor: "white",
    margin: "1rem",
  },
  cardImg: {
    height: "50px",
    margin: "0 0.5rem",
  },
  Title: {
    fontSize: "40px !important",
    fontWeight: "600 !important",
    textAlign: "left",
    color: "var(--primary-blue)",
    "@media (max-width:1100px)": {
      fontSize: "28px !important",
    },
  },
  subTitle: {
    fontWeight: "300 !important",
    fontSize: "18px !important",
    color: "#666",
    margin: "0.5rem 0 !important",
    "@media (max-width:1100px)": {
      fontSize: "16px !important",
    },
  },
  heading: {
    fontWeight: "600 !important",
    color: "var(--primary-blue)",
    fontSize: "32px !important",
    "@media (max-width:1100px)": {
      fontSize: "26px !important",
    },
  },
  subHeading: {
    fontWeight: "300 !important",
    color: "#666",
    fontSize: "18px !important",
    margin: "0.5rem 0 !important",
    "@media (max-width:1100px)": {
      fontSize: "16px !important",
    },
  },
  subCategory: {
    margin: "0.5rem 0 !important",
    fontWeight: "600 !important",
    color: "var(--primary-blue)",
    fontSize: "24px !important",
  },
  subcategory: {
    margin: "0.5rem 0 !important",
    fontWeight: "500 !important",
    color: "#aaa",
    fontSize: "22px !important",
    "@media (max-width:1100px)": {
      fontSize: "18px !important",
    },
  },
}));

export default useStyles;
