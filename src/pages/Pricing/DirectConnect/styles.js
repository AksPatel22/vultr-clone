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
  },
  subTitle: {
    fontWeight: "300 !important",
    fontSize: "18px !important",
    color: "#666",
    margin: "0.5rem 0 !important",
  },
  heading: {
    fontWeight: "500 !important",
    color: "var(--primary-blue)",
    fontSize: "28px !important",
    textAlign: "center",
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
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    width: "180px",
    border: "2px solid var(--primary-blue)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 0.5rem",
    borderRadius: "15px",
    marginTop: "2rem !important",
    transition: "all 0.3s ease-in",
    boxShadow: "2px 2px 13px 3px rgba(110,110,110,0.75) !important",
    "&:hover": {
      transform: "translateY(-10px)",
      transition: "all 0.3s ease-in",
    },
  },
  cardHeading: {
    backgroundColor: "var(--primary-blue)",
    color: "white",
    width: "100%",
    textAlign: "center",
    height: "40px ",
    position: "relative",
  },
  cardTitle: {
    fontSize: "20px !important",
    textAlign: "center",
    fontWeight: "500 !important",
  },
  cardPricing: {
    color: "var(--secondary-blue)",
    fontSize: "28px !important",
  },
  cardDesc: {
    textAlign: "center",
    margin: "0.5rem 0 !important",
  },
}));

export default useStyles;
