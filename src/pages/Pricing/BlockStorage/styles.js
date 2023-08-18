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
    fontSize: "36px !important",
    fontWeight: "500 !important",
    textAlign: "left",
    color: "var(--primary-blue)",
    width: "100%",
  },
  cardContainer: {
    width: "80%",
    padding: "2rem",
    boxShadow: "2px 2px 13px 3px rgba(110,110,110,0.75) ",
    margin: "1rem 0",
  },
  infoContainer: {
    boxShadow: "2px 2px 13px 3px rgba(110,110,110,0.75) ",
    display: "flex",
    padding: "1rem",
  },
}));

export default useStyles;
