// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem !important",
    "@media (max-width:1100px)": {
      display: "none",
    },
  },
  heading: {
    color: "var(--primary-blue)",
    fontWeight: "600 !important",
    fontSize: "38px !important",
    "@media (max-width:1100px)": {
      fontSize: "22px !important",
    },
  },
  subHeading: {
    marginBottom: "2rem !important",
    color: "#666",
    fontWeight: "300 !important",
    fontSize: "28px !important",
    "@media (max-width:1100px)": {
      fontSize: "20px !important",
    },
  },
  tooltipContainer: {
    backgroundColor: "white",
    height: "10rem",
    width: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  summary: {
    position: "absolute",
    right: "10%",
    marginTop: "10%",
    height: "9rem",
    width: "9rem",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center !important",
    alignItems: "center",
    borderRadius: "50%",
  },
  summaryHeading: {
    // marginTop: "4rem !important",
    color: "var(--text-blue)",
    fontSize: "26px !important",
  },
  smallContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2rem",
    display: "none",
    "@media (max-width:1100px)": {
      display: "flex",
    },
  },
  cardsContainer: {
    backgroundColor: "white",
    height: "10rem",
    width: "10rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    border: "1px solid #aaa",
  },
  exploreBtn: {
    marginTop: "-15rem !important",
    "@media (max-width:1100px)": {
      marginTop: "1rem !important",
    },
    height: "3rem",
    width: "15rem",
    fontSize: "16px !important",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
