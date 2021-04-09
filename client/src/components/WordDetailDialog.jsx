import {
  Dialog,
  DialogContent,
  Divider,
  Icon,
  IconButton,
  Typography as Text,
} from "@material-ui/core";
import { memo } from "react";
import WordInfo from "./WordInfo";

const WordDetailDialog = ({ word, onClose }) => (
  //Showing the dialog if word is not null and setting the word null on close.
  <Dialog fullScreen open={!!word} onClose={() => onClose(null)}>
    <IconButton
      onClick={() => onClose(null)}
      style={{ margin: "8px 8px 0 auto" }}
    >
      <Icon>close</Icon>
    </IconButton>
    <Text style={{ margin: "0 24px" }} variant="h3">
      {word?.word}
    </Text>
    <Divider />
    <DialogContent>{word && <WordInfo word={word} />}</DialogContent>
  </Dialog>
);

export default memo(WordDetailDialog);
