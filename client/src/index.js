import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

//Creating a new theme.
const theme = createMuiTheme({
  typography: { fontFamily: "Kumbh Sans" },
  palette: {
    primary: {
      main: "#5d1049",
    },
  },
});

//Creating the store.
const store = configureStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
