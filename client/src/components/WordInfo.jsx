import { Divider, Typography as Text } from "@material-ui/core";
import { Fragment } from "react";
import { memo } from "react";

const Mute = ({ children, ...rest }) => (
  <Text color="textSecondary" {...rest}>
    {children}
  </Text>
);

//A reusable componenet for rendering senses with their examples
const Sense = ({ sense }) => (
  <>
    <Text>{sense.definitions[0]}</Text>
    <ul>
      {sense.examples.map((ex) => (
        //Rendering examples as a list
        <Text key={ex._id} component="li">
          {ex?.text}
        </Text>
      ))}
    </ul>
  </>
);

const WordInfo = ({ word }) =>
  word.results.map((r) => (
    //Going through different Lexical entries.
    <div style={{ margin: "8px 0" }} key={r._id}>
      <Mute>{r.category}</Mute>
      {/* Going through sub entries. */}
      {r.entries.map((e) => (
        <Fragment key={e._id}>
          {e.origin[0] && <Mute>Origin : {e.origin[0]}</Mute>}
          {/* Going through senses */}
          {e.senses.map((s) => (
            <Fragment key={s._id}>
              <Sense sense={s} />
              {/* Going through subsenses */}
              {s.subsenses.map((ss) => (
                <Sense key={ss._id} sense={ss} />
              ))}
            </Fragment>
          ))}
        </Fragment>
      ))}
      <Divider />
    </div>
  ));

export default memo(WordInfo);
