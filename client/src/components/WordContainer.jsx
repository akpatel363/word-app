import { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Divider,
  Icon,
  List,
  makeStyles,
  Typography as Text,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchWords } from "../store/actions";
import Word from "./Word";
import WordDetailDialog from "./WordDetailDialog";
import AddWord from "./AddWord";

//Custom styles
const useStyles = makeStyles((theme) => ({
  spinner: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(2, 0),
  },
  error: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(3, 0),
    "& .MuiIcon-root": {
      fontSize: "4em",
      color: theme.palette.error.main,
    },
    "& .MuiTypography-root": {
      marginBottom: theme.spacing(1),
    },
  },
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
  },
  stickyText: {
    top: "0",
    left: "0",
    position: "sticky",
    backgroundColor: "white",
    zIndex: 100,
    "& .MuiTypography-root": {
      padding: theme.spacing(2, 2, 1),
    },
  },
}));

const WordContainer = (props) => {
  const classes = useStyles();
  const [active, setActive] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((s) => s);

  useEffect(() => {
    //Fetching the words when the component is initially rendered.
    dispatch(fetchWords());
  }, [dispatch]);

  if (data.error)
    // Show error if any error occurs while fetching words.
    return (
      <div className={classes.error}>
        <Icon>error</Icon>
        <Text variant="h5">{data.error || "Something went wrong."}</Text>
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => dispatch(fetchWords())}
        >
          Retry
        </Button>
      </div>
    );

  if (!data.words || data.loading)
    //Show spinner while waiting for words from the backend.
    return (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  return (
    <>
      <div className={classes.stickyText}>
        <Text>Words</Text>
        <Divider />
      </div>
      <List style={{ padding: 0 }}>
        {data.words
          ?.filter((w) => w?.word.includes(data.search)) //filtering the results based on the input query.
          ?.map((w) => (
            <Word key={w._id} word={w} onSelect={setActive} />
          ))}
      </List>
      {/* Showing details of a particular word if it's active. */}
      <WordDetailDialog word={active} onClose={setActive} />
      <AddWord />
    </>
  );
};

export default WordContainer;
