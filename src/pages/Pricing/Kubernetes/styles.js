// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    // maxHeight: "100vh !important",
    backgroundColor: "white",
    margin: "1rem",
  },

  Title: {
    fontSize: "40px !important",
    fontWeight: "600 !important",
    textAlign: "left",
    color: "var(--primary-blue)",
  },
  subTitle: {
    fontWeight: "300 !important",
    fontSize: "18px !important",
    color: "#666",
    margin: "0.5rem 0 !important",
  },
}));

export default useStyles;
