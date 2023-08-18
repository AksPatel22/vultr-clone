// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "white",
    margin: "1rem",
  },
  Title: {
    fontSize: "38px !important",
    fontWeight: "600 !important",
    textAlign: "left",
    color: "var(--primary-blue)",
  },

  gridContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  gridItem: {
    display: "flex",
    justifyContent: "flex-start",
  },
  card: {
    width: "180px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1.5rem",
    borderRadius: "15px",
    marginTop: "2rem !important",
    boxShadow: "1px 0px 10px 0px rgba(102,102,102,0.75) !important",
  },
  cardTitle: {
    fontSize: "18px !important",
    textAlign: "center",
    fontWeight: "500 !important",
  },
  cardPricing: {
    color: "var(--text-blue)",
    fontSize: "34px !important",
    fontWeight: "500 !important",
  },
  cardDesc: {
    textAlign: "center",
    margin: "0.5rem 0 !important",
  },
}));

export default useStyles;
