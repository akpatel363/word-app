import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  Icon,
  TextField,
} from "@material-ui/core";

import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWord } from "../store/actions";

const AddWord = (props) => {
  const [open, setOpen] = useState(false); //State for dialog
  const [text, setText] = useState(""); //State for the input text
  const dispatch = useDispatch();
  const { posting, postingError } = useSelector((s) => s);

  return (
    <>
      <Fab
        color="primary"
        onClick={() => setOpen(true)}
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
      >
        <Icon>add</Icon>
      </Fab>
      <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Word</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            value={text}
            label="New Word"
            error={!!postingError}
            helperText={postingError}
            onChange={(e) => setText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            color="primary"
            disabled={!text || posting}
            onClick={() =>
              dispatch(
                addWord(text, () => {
                  setOpen(false);
                  setText("");
                })
              )
            }
          >
            {/* Showing a spinner if word is being posted. */}
            {posting ? <CircularProgress size={24} /> : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default memo(AddWord); //Memoizing the component to optimize rendering.
