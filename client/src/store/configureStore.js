import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";

//Configuration to use Redux DevTools while development
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose
    : compose;

const configureStore = () => {
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
};

export default configureStore;
