// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "24px !important",
  },
  card: {
    margin: "0 0.5rem",
    boxShadow: "none !important",
    border: "1px solid #bbb",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid #888",
    },
  },
  activeCard: {
    margin: "0 0.5rem",
    boxShadow: "2px 1px 20px 2px rgba(210,210,210,0.75) !important",
    border: "none !important",
    cursor: "pointer",
    position: "relative",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardImg: {
    height: "50px",
  },
  cardTitle: {
    fontSize: "18px !important",
    fontWeight: "500 !important",
  },

  topBtn: {
    position: "absolute",
    top: "0",
    right: "0",
    backgroundColor: "var(--text-blue)",
    transform: "rotate(45deg)",
    width: "6rem",
    height: "2.5rem",
    marginRight: "-30px",
    marginTop: "-25px",
  },
  checkIcon: {
    position: "absolute",
    top: "15px",
    right: "20px",
    color: "white",
    transform: "rotate(-45deg)",
  },
}));

export default useStyles;
