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
      fontSize: "40px !important",
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
    boxShadow: "0px 2px 5px 0px rgba(150,150,150,1) !important ",
  },
  whiteSvg: {
    // marginTop: "40vh !important",
    position: "absolute",
    top: "50vh",
  },
  forgot: {
    width: "100%",
    textAlign: "left",
    fontSize: "14px !important",
    color: "#555",
    "&:hover": {
      color: "var(--text-blue)",
    },
    marginTop: "1.5rem !important",
    marginBottom: "-1.5rem !important",
    cursor: "pointer",
    height: "2rem",
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
    justifyContent: "space-around",
    margin: "1rem 0",
  },
  icon: {
    fontSize: "30px !important",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "0.5rem !important",
    "&:hover": {
      border: "1px solid var(--secondary-blue)",
      color: "var(--text-blue)",
    },
  },
  iconBox: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  iconText: {
    fontSize: "14px !important",
  },
  subHeading: {
    fontSize: "16px !important",
    textAlign: "center",
    color: "#555",
  },
}));

export default useStyles;
