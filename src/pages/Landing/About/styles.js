// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(90deg, rgba(2,16,72,1) 0%, rgba(30,56,163,1) 100%)",
  },
  container: {
    marginTop: "6rem !important",
    width: "60%",
    height: "100% !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:870px)": {
      width: "80%",
    },
    zIndex: "2",
  },
  heading: {
    color: "white",
    fontWeight: "600 !important",
    fontSize: "52px !important",
    "@media (max-width:875px)": {
      flexDirection: "column",
      fontSize: "40px !important",
      textAlign: "center",
    },
  },
  subHeading: {
    textAlign: "center",
    color: "white",
    fontWeight: "300 !important",
    margin: "2rem 0 !important",
    fontSize: "22px !important",
  },
  formContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "2rem",
    width: "85%",
    height: "max-content",
    "@media (max-width:870px)": {
      width: "100%",
      marginTop: "2rem",
      flexDirection: "column",
      gap: "0.5rem",
    },
  },
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
    width: "32%",
    "@media (max-width:870px)": {
      width: "80%",
    },
  },
  btn: {
    width: "32%",
    height: "3.5rem !important",
    "@media (max-width:870px)": {
      width: "80%",
      height: "3rem !important",
    },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.2s ease-in",
    "&:hover": {
      transition: "all 0.2s ease-in",
      cursor: "pointer",
      transform: "translateY(-10px)",
    },
    width: "90%",
    maxWidth: "400px",
    marginBottom: "1rem !important",
    boxShadow: "none !important",
  },
  gridContainer: {
    marginTop: "5rem !important",
    padding: "0 3rem",
    "@media (max-width:750px)": {
      padding: "0 2rem",
    },
    zIndex: "2",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
  },
  cardHeading: {
    fontWeight: "700 !important",
    fontSize: "20px !important",
    marginBottom: "1rem !important",
  },
  cardDesc: {
    fontWeight: "400 !important",
    fontSize: "16px !important",
    textAlign: "center",
    margin: "1rem 0.5rem !important",
  },
  cardPricing: {
    fontSize: "18px !important",
    fontWeight: "500 !important",
    color: "var(--text-blue)",
    marginBottom: "1rem !important",
  },
  whiteSVG: {
    // position: "absolute",
    // bottom: "0%",
    marginTop: "-20%",
    height: "auto% !important",
    "@media (max-width:750px)": {
      display: "none",
    },
  },
  cardSVG: {
    margin: "0.5rem 0",
  },
}));

export default useStyles;
