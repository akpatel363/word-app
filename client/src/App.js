import { makeStyles } from "@material-ui/core";
import NavBar from "./components/NavBar";
import WordContainer from "./components/WordContainer";

const useStyles = makeStyles((theme) => ({
  innerContainer: {
    overflow: "hidden",
    overflowY: "scroll",
    background: "white",
    height: "calc(100vh - 64px)",
    borderRadius: "20px 20px 0 0",
    border: "1spx solid transparent",
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 56px)",
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <div className={classes.innerContainer}>
        <WordContainer />
      </div>
    </>
  );
}

export default App;
