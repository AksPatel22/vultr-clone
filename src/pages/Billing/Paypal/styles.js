// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "-1rem",
    width: "100%",
  },
  title: {
    fontSize: "24px !important",
  },
  subTitle: {
    fontSize: "20px !important",
  },
  priceCard: {
    border: "1px solid #aaa !important",
    boxShadow: "none !important",
    height: "3rem",
    width: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      border: "1px solid #444 !important",
    },
  },
  priceCardActive: {
    border: "none !important",
    boxShadow: "none !important",
    height: "3rem",
    width: "5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--text-blue) !important",
  },
  cardPrice: {
    fontWeight: "500 !important",
  },
  cardPriceActive: {
    fontWeight: "500 !important",
    color: "white",
  },
  btn: {
    backgroundColor: "rgba(0, 123, 252,0.2)",
    textAlign: "center",
    color: "var(--text-blue)",
    fontSize: "20px !important",
    fontWeight: "500 !important",
    margin: "1rem 0 !important",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "rgba(0, 123, 252,0.3)",
    },
  },
}));

export default useStyles;
