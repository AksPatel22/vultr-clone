import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    // height: "100vh",
    background:
      "linear-gradient(90deg, rgba(2,16,72,1) 0%, rgba(30,56,163,1) 100%)",
  },
  linkContainer: {
    paddingTop: "2rem !important",
    "@media (max-width:900px)": {
      display: "none !important",
    },
  },
  heading: {
    color: "white",
    fontSize: "22px !important",
  },
  subHeading: {
    color: "#aaa",
    fontSize: "14px !important",
    fontWeight: "300 !important",
    margin: "1rem 0 !important",
    "&:hover": {
      color: "white",
    },
  },
  card: {
    backgroundColor: "transparent !important",
    boxShadow: "none !important",
  },
  socialLinksContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem 3rem",
    "@media (max-width:900px)": {
      flexDirection: "column",
      gap: "2rem",
    },
  },
  socialIcon: {
    color: "#aaa !important",
    "&:hover": {
      color: "white !important",
    },
  },
  accordionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "@media (min-width:900px)": {
      display: "none !important",
    },
  },
  accordionSummary: {
    marginLeft: "1.5rem !important  ",
    color: "#aaa",
    fontWeight: "300 !important",
    "&:hover": {
      color: "white",
    },
  },
}));

export default useStyles;
