// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  navbar: {
    background:
      "linear-gradient(90deg, rgba(2,16,72,1) 0%, rgba(30,56,163,1) 100%)",
    boxShadow: "none !important",
    padding: "0 2rem !important",
  },
  navLink: {
    fontWeight: "500 !important",
    margin: "1.3rem 1rem !important",
    textTransform: "capitalize !important",
    fontSize: "16px !important",
  },
  logo: {
    fontFamily: "monospace",
    fontWeight: 700,
    letterSpacing: ".3rem",
    color: "inherit",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
  logoImg: {
    height: "50px !important",
    width: "50px !important",
  },
  profileImg: {
    color: "white !important",
    height: "35px",
  },
  hoverContainer: {
    height: "100vh",
    width: "100%",
    backgroundColor: "red",
    zIndex: "10",
    position: "absolute",
    display: "flex",
  },
  hoverLeft: {
    width: "25%",
    backgroundColor: "white",
    borderRight: "1px solid #aaa",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
  },
  hoverCenter: {
    backgroundColor: "white",
    width: "50%",
    borderLeft: "1px solid #aaa",
    borderRight: "1px solid #aaa",
  },
  hoverRight: {
    backgroundColor: "white",
    borderLeft: "1px solid #aaa",
    width: "25%",
  },
  leftCard: {
    width: "80%",
    backgroundColor: "#eee !important",
    boxShadow: "none !important",
    padding: "1rem",
    margin: "0.5rem 0",
  },
  cardImg: {
    height: "20px",
  },
  cardHeading: {
    fontSize: "16px !important",
    fontWeight: "bold !important",
  },
  cardDesc: {
    fontSize: "16px !important",
    fontWeight: "300 !important",
  },
  learnMore: {
    display: "flex",
    backgroundColor: "white",
    width: "max-content",
    borderRadius: "50px",
    padding: "0.5rem",
  },
}));

export default useStyles;
