// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "32px !important",
    fontWeight: "300 !important",
  },
  container: {
    display: "flex",
  },
  tabContainer: {
    width: "20%",
  },
  paymentContainer: {
    margin: 0,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "80%",
  },
  summaryTitle: {
    fontSize: "24px !important",
  },
  paymentInfo: {
    width: "60%",
  },
  paymentSummary: {
    width: "40%",
  },
  summaryContainer: {
    border: "none !important",
    boxShadow: "2px 1px 20px 2px rgba(210,210,210,0.75)  !important",

    backgroundColor: "white !important",
    padding: "1rem",
    marginTop: "1rem !important",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 123, 252,0.2)",
    textAlign: "center",
    color: "var(--text-blue)",
    margin: "1rem 0 !important",
    borderRadius: "5px",
    height: "3.5rem",
    "&:hover": {
      backgroundColor: "rgba(0, 123, 252,0.3)",
    },
  },
}));

export default useStyles;
