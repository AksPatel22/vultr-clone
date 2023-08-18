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
  },
  heading: {
    color: "var(--primary-blue)",
    fontWeight: "600 !important",
    fontSize: "42px !important",
    "@media (max-width:800px)": {
      flexDirection: "column",
      fontSize: "22px !important",
    },
  },
  subHeading: {
    fontSize: "22px !important",
    color: "var(--primary-blue)",
    textAlign: "center",
    fontWeight: "lighter !important",
    margin: "2rem 0 !important",
  },
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "2rem",
    "@media (max-width:950px)": {
      flexDirection: "column",
    },
  },
  gridContainer: {
    marginTop: "5rem !important",
    padding: "0 1rem",
    "@media (max-width:750px)": {
      padding: "0 2rem",
    },
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 2rem",
  },
  card: {
    boxShadow: "2px 1px 20px 2px rgba(210,210,210,0.75) !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    transition: "all 0.2s ease-in",
    height: "25rem",
    "&:hover": {
      boxShadow: "2px 0px 20px 1px rgba(200,200,200,1) !important",
      transition: "all 0.2s ease-in",
      cursor: "pointer",
      transform: "translateY(-10px)",
    },
    width: "100%",
    marginBottom: "1rem !important",
    "@media (max-width:900px)": {
      width: "85%",
    },
    padding: "0 1rem",
  },
  cardHeading: {
    fontWeight: "700 !important",
    fontSize: "18px !important",
    marginBottom: "1rem !important",
  },
  cardDesc: {
    fontWeight: "300 !important",
    fontSize: "17px !important",
    textAlign: "center",
    marginBottom: "1rem !important",
  },
  cardPricing: {
    fontWeight: "500 !important",
    color: "var(--text-blue)",
    marginBottom: "1rem !important",
  },
  arrowIcon: {
    "@media (max-width:1250px)": {
      transform: "rotate(90deg)",
    },
  },
  cardImg: {
    height: "180px",
    width: "220px",
    "@media (max-width:900px)": {
      width: "140px",
      height: "110px",
    },
  },
  blueSVG: {
    display: "none !important",
    marginTop: "-2rem",
    "@media (max-width:900px)": {
      display: "block !important",
    },
  },
}));

export default useStyles;
