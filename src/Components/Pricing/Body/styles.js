// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: "2rem 0",
  },
  leftContainer: {
    width: "35%",
    height: "100% !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:750px)": {
      width: "80%",
    },
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      width: "3px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#fff",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#fff",
      borderRadius: "4px",
    },
    "&:hover::-webkit-scrollbar-thumb": {
      backgroundColor: "#bbb",
      borderRadius: "4px",
    },
    "&:hover::-webkit-scrollbar-track": {
      backgroundColor: "#d1d1d1",
      borderRadius: "4px",
    },
  },
  rightContainer: {
    width: "65%",
    height: "100% !important",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:750px)": {
      width: "80%",
    },
    padding: "0 1rem",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "3px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#fff",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#fff",
      borderRadius: "4px",
    },
    "&:hover::-webkit-scrollbar-thumb": {
      backgroundColor: "#bbb",
      borderRadius: "4px",
    },
    "&:hover::-webkit-scrollbar-track": {
      backgroundColor: "#d1d1d1",
      borderRadius: "4px",
    },
  },
}));

export default useStyles;
