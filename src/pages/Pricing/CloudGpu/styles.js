// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
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
    fontWeight: "500 !important",
    color: "var(--primary-blue)",
    fontSize: "20px !important",
    margin: "0.5rem 0 !important",
  },
}));

export default useStyles;
