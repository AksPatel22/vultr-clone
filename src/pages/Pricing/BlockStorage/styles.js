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
  },
}));

export default useStyles;
