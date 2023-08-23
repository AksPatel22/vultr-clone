// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "300 !important",
    fontSize: "36px !important",
  },
  subTitle: {
    fontWeight: "400 !important",
    fontSize: "28px !important",
  },
  desc: {
    fontSize: "16px !important",
  },
  card: {
    border: "1px solid #aaa",
    width: "max-content",
    padding: "1rem",
    boxShadow: "none !important",
    height: "4rem",
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
