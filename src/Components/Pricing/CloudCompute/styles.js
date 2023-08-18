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
    fontSize: "36px !important",
    fontWeight: "500 !important",
    textAlign: "left",
    color: "var(--primary-blue)",
  },
  subTitle: {
    fontSize: "18px !important",
    color: "#444",
    margin: "0.5rem 0 !important",
  },
  heading: {
    fontWeight: "500 !important",
    color: "var(--primary-blue)",
    fontSize: "28px !important",
  },
  subHeading: {
    color: "#444",
    fontSize: "18px !important",
    margin: "0.5rem 0 !important",
  },
  subCategory: {
    fontWeight: "500 !important",
    color: "var(--primary-blue)",
    fontSize: "18px !important",
    margin: "0.5rem 0 !important",
  },
}));

export default useStyles;
