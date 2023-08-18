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
    "@media (max-width:950px)": {
      background:
        "linear-gradient(90deg, rgba(2,16,72,1) 0%, rgba(30,56,163,1) 100%)",
    },
  },
  heading: {
    color: "var(--primary-blue)",
    fontWeight: "600 !important",
    fontSize: "42px !important",
    "@media (max-width:800px)": {
      flexDirection: "column",
      fontSize: "22px !important",
      "@media (max-width:950px)": {
        color: "white",
      },
    },
  },
  subHeading: {
    color: "var(--primary-blue)",
    textAlign: "center",
    fontWeight: "300 !important",
    margin: "2rem 0 !important",
    fontSize: "22px !important",
    "@media (max-width:800px)": {
      fontSize: "18px !important",
    },
    "@media (max-width:950px)": {
      color: "white",
    },
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
  accordionContainer: {
    padding: "0 2.5rem !important",
    width: "35%",
    "@media (max-width:950px)": {
      width: "95%",
    },
  },
  imgContainer: {
    width: "60%",
    padding: "2rem !important",
    "@media (max-width:950px)": {
      width: "90%",
    },
  },
  img: {
    border: "1px solid #aaa",
    maxWidth: "100%",
    height: "auto",
    opacity: "0",
    display: "none",
    transition: "all 0.3s ease-in-out",
  },

  imgVisible: {
    opacity: "1",
    display: "block",
  },
  btn: {
    margin: "1rem 2rem !important",
    height: "4rem",
    width: "15rem",
    "@media (max-width:950px)": {
      display: "none !important",
    },
  },
  accordionHeading: {
    fontWeight: "500 !important",
  },
  accordionSummary: {
    fontWeight: "300 !important",
  },
  whiteSVG: {
    marginTop: "-2rem",
    display: "none !important",
    "@media (max-width:950px)": {
      display: "block !important",
    },
  },
}));

export default useStyles;
