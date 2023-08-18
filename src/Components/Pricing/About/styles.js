// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(90deg, rgba(2,16,72,1) 0%, rgba(30,56,163,1) 100%)",
  },
  container: {
    width: "60%",
    height: "100% !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:750px)": {
      width: "80%",
    },
    margin: "2rem 0",
  },
  heading: {
    color: "white",
    fontWeight: "600 !important",
    fontSize: "52px !important",
    "@media (max-width:800px)": {
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
    justifyContent: "center",
    gap: "2rem",
    marginBottom: "2rem",
    width: "80%",
    height: "max-content",
    "@media (max-width:750px)": {
      width: "100%",
      marginTop: "2rem",
      flexDirection: "column",
      gap: "0.5rem",
    },
  },

  btn: {
    width: "32%",
    height: "3.5rem !important",
    "@media (max-width:750px)": {
      width: "80%",
      height: "3rem !important",
    },
    color: "white !important",
  },
}));

export default useStyles;
