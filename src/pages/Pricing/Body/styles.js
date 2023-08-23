// styles.js
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    "@media (max-width:1100px)": {
      flexDirection: "column",
    },
  },
  leftContainer: {
    width: "30%",
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
    "@media (max-width:1100px)": {
      display: "none",
    },
  },
  rightContainer: {
    width: "70%",
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
    "@media (max-width:1100px)": {
      width: "80%",
      height: "auto",
      overflowY: "none !important",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "&::-webkit-scrollbar-thumb": {
        display: "none",
      },
      "&::-webkit-scrollbar-track": {
        display: "none",
      },
    },
  },
  menuBtnContainer: {
    "@media (max-width:1100px)": {
      display: "flex",
    },
    display: "none",
    width: "100%",
    alignItems: "center",
    padding: "0.5rem 0",
    borderBottom: "1px solid #aaa",
  },
  sideBar: {
    height: "100vh",
    width: "100%",
    position: "absolute",
    zIndex: "100",
    backgroundColor: "white",
    overflowY: "scroll",
    display: "block",
  },
  hidden: {
    transform: "translateX(-100vw)",
    display: "none",
  },
  sideBarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
