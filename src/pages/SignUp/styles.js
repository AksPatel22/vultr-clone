// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
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
    "@media (max-width:750px)": {
      width: "80%",
    },
    zIndex: "2",
  },
  heading: {
    fontWeight: "600 !important",
    fontSize: "40px !important",
    color: "var(--primary-blue)",
    textAlign: "center",
    "@media (max-width:800px)": {
      flexDirection: "column",
      fontSize: "26px !important",
    },
  },
  subHeading: {
    fontWeight: "400 !important",
    fontSize: "16px !important",
    color: "var(--primary-blue)",
    textAlign: "center",
    "@media (max-width:800px)": {
      flexDirection: "column",
      fontSize: "16px !important",
    },
  },
  mainHeading: {
    fontWeight: "400 !important",
    fontSize: "34px !important",
    color: "white",
    marginTop: "10vh !important",
    textAlign: "center",
    "@media (max-width:800px)": {
      flexDirection: "column",
      fontSize: "40px !important",
    },
  },
  formContainer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5rem 3rem",
    justifyContent: "center",
    zIndex: "10",
    minWidth: "25%",
    maxWidth: "30%",
  },
  whiteSvg: {
    marginTop: "-40vh !important",
  },
  forgot: {
    width: "100%",
    textAlign: "left",
    fontSize: "16px !important",
    color: "#555",
  },
  or: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    height: "2.5rem",
    alignItems: "center",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "1rem 0",
    gap: "1rem",
  },
  icon: {
    fontSize: "38px !important",
    border: "1px solid black",
    borderRadius: "10px",
    padding: "0.5rem !important",
    "&:hover": {
      border: "1px solid var(--secondary-blue)",
      color: "var(--secondary-blue)",
    },
  },
}));

export default useStyles;
