import { Divider, ListItem, ListItemText } from "@material-ui/core";
import { memo } from "react";

const Word = ({ word, onSelect }) => (
  <>
    <ListItem
      button
      key={word._id}
      onClick={() => onSelect(word)}
      style={{ flexDirection: "column", alignItems: "flex-start" }}
    >
      <ListItemText
        primary={word.word}
        primaryTypographyProps={{ variant: "h6" }}
      />
      {word.results?.map((r) => ( //Rendering different Lexical Entries with their types and meanings
        <ListItemText
          key={r._id}
          secondaryTypographyProps={{ variant: "body2", color: "textPrimary" }}
          secondary={`(${r.category}) ${r.entries[0].senses[0].definitions[0]}`}
        />
      ))}
    </ListItem>
    <Divider component="li" />
  </>
);

export default memo(Word); //Memoizing the Component to optimize rendering
