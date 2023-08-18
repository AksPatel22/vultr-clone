// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: "white",
    margin: "1rem",
  },
  Title: {
    textAlign: "left",
    color: "var(--primary-blue)",
    width: "100%",
    fontSize: "40px !important",
    fontWeight: "600 !important",
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
    boxShadow: "2px 1px 20px 2px rgba(210,210,210,0.75) !important",
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
