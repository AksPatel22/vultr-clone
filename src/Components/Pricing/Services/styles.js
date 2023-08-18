// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "5rem",
  },
  container: {
    width: "75%",
    height: "100% !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:750px)": {
      width: "80%",
    },
  },
  heading: {
    color: "var(--primary-blue)",
    fontWeight: "600 !important",
    fontSize: "40px !important",
    "@media (max-width:800px)": {
      flexDirection: "column",
      fontSize: "40px !important",
      textAlign: "center",
    },
  },
  subHeading: {
    textAlign: "center",
    color: "#666",
    fontWeight: "300 !important",
    margin: "1rem 0 !important",
    fontSize: "24px !important",
  },
  cardsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "max-content",
  },
  cardContainer: {
    height: "100%",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  faqContainer: {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "1px 0px 10px 0px rgba(102,102,102,0.75) !important",
    margin: "1rem 0",
  },
  img: {
    height: "80px",
  },
  leftCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "1rem",
    boxShadow: "none !important",
    border: "1px solid #bbb",
    "&:hover": {
      border: "1px solid var(--text-blue)",
    },
    height: "220px",
    width: "220px",
  },
  rightCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "1rem 0",
    boxShadow: "none !important",
    height: "100%",
    width: "50%",
    borderRadius: "0px !important",
  },
}));

export default useStyles;
