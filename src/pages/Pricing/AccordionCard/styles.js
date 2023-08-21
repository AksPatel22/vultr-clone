// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    boxShadow: "2px 1px 20px 2px rgba(210,210,210,0.75) ",
    padding: "0.5rem",
    margin: "0.8rem 0",
  },
  text: {
    fontWeight: "500 !important",
    margin: "0.5rem 0 !important",
  },
}));

export default useStyles;
