// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  table: {
    "@media (max-width:1100px)": {
      display: "none !important",
    },
  },
}));

export default useStyles;
