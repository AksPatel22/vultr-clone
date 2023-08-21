// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    // maxHeight: "100vh !important",
    backgroundColor: "white",
    margin: "1rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  Title: {
    width: "100%",
    fontSize: "40px !important",
    fontWeight: "600 !important",
    textAlign: "left",
    color: "var(--primary-blue)",
    "@media (max-width:1100px)": {
      fontSize: "28px !important",
    },
  },
  cardContainer: {
    width: "80%",
    padding: "2rem",
    boxShadow: "2px 1px 20px 2px rgba(210,210,210,0.75) ",
    margin: "1rem 0",
  },
  infoContainer: {
    boxShadow: "2px 1px 20px 2px rgba(210,210,210,0.75) ",
    display: "flex",
    padding: "1rem",
    "@media (max-width:1100px)": {
      flexDirection: "column",
    },
  },
}));

export default useStyles;
