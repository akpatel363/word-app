import {
  AppBar,
  Icon,
  IconButton,
  Input,
  Toolbar,
  Typography as Text,
} from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/actions";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false); //State to check whether in searching mode or not.

  return (
    <AppBar position="relative" elevation={0}>
      <Toolbar>
        {/* If in searching mode than showing an input. */}
        {active ? (
          <Input
            fullWidth
            disableUnderline
            placeholder="Search..."
            style={{ color: "white" }}
            onChange={(e) => dispatch(setSearch(e.target.value.toLowerCase()))}
            endAdornment={
              <IconButton
                style={{ color: "white" }}
                onClick={() => {
                  //Reseting the state and search string when closed.
                  setActive(false);
                  dispatch(setSearch(""));
                }}
              >
                <Icon>close</Icon>
              </IconButton>
            }
          />
        ) : (
          <>
            {/* Else showing the title and the search button. */}
            <Text variant="h6">Vocab</Text>
            <IconButton
              onClick={() => setActive(true)}
              style={{ marginLeft: "auto", color: "white" }}
            >
              <Icon>search</Icon>
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
