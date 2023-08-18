// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
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
    display: "flex",
  },
  left: {
    width: "60%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  right: {
    width: "40%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
  },
  card: {
    width: "100%",
    margin: "0.5rem 0",
  },
}));

export default useStyles;
