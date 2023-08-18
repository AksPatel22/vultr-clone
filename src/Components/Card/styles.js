// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "75%",
    minHeight: "100px !important",
    backgroundColor: "white",
    border: "1px solid #ddd ",
    borderRadius: "5px",
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    cursor: "pointer",
    gap: "0.5rem",
  },
  cardImg: {
    height: "50px",
    margin: "0 0.5rem",
  },
  cardTitle: {
    fontSize: "18px !important",
    fontWeight: "500 !important",
  },
  cardSubTitle: {
    fontSize: "12px !important",
  },
}));

export default useStyles;
