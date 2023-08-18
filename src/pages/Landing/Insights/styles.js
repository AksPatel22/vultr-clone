// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "5rem",
    height: "100vh !important",
    backgroundColor: "blanchedalmond",
  },
  heading: {
    color: "var(--primary-blue)",
    fontWeight: "600 !important",
    fontSize: "42px !important",
    textAlign: "center",
    "@media (max-width:800px)": {
      flexDirection: "column",
      fontSize: "22px !important",
    },
  },
  subHeading: {
    color: "var(--primary-blue)",
    fontWeight: "lighter !important",
    fontSize: "22px !important",
    textAlign: "center",
    margin: "2rem 0 !important",
  },
  gridContainer: {
    marginTop: "5rem !important",
    height: "100%",
    padding: "0 5rem",
    "@media (max-width:750px)": {
      padding: "0 2rem",
    },
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 10px 5px rgba(200,200,200,1) !important",
    "&:hover": {
      transition: "all 0.2s ease-in",
      cursor: "pointer",
      transform: "translateY(-10px)",
    },
  },
  SVG: {
    height: "80px",
  },
  cardImg: {
    height: "40%",
    width: "100%",
  },
  subGrid: {
    height: "100%",
  },
  gridItem: {
    height: "100%",
  },
  subCard: {
    height: "230px",
    border: "1px solid #aaa",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      border: "1px solid blue",
    },
  },
  cardHeading: {
    fontWeight: "bold !important",
    margin: "0 1rem !important",
  },
  cardDesc: {
    fontWeight: "300 !important",
    margin: "0 1rem !important",
  },
}));

export default useStyles;
