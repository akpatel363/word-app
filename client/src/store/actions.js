import axios from "../utils/axios";

//Different Actions to modify Redux State
export const SET_SEARCH = "SET_SEARCH";
export const FETCHING_STARTED = "FETCHING_STARTED";
export const FETCHING_ERROR = "FETCHING_ERROR";
export const FETCH_WORDS = "FETCH_WORDS";
export const POSTING_WORD = "POSTING_WORD";
export const ADD_WORD = "ADD_WORD";
export const POSTING_ERROR = "POSTING_ERROR";

const handleError = (err) => {
  if (!err.response) {
    return "Error connecting to server.";
  }
  return err.response?.data?.error || "Unknown error occurred.";
};

export const setSearch = (search) => ({ type: SET_SEARCH, payload: search });

//Fetch words from the backend
export const fetchWords = () => async (dispatch) => {
  dispatch({ type: FETCHING_STARTED });
  try {
    const res = await axios.get("api/words");
    dispatch({ type: FETCH_WORDS, payload: res.data });
  } catch (err) {
    dispatch({ type: FETCHING_ERROR, payload: handleError(err) });
  }
};

//Add new word
export const addWord = (word, cb) => async (dispatch) => {
  dispatch({ type: POSTING_WORD });
  try {
    const res = await axios.post("/api/words", { word });
    dispatch({ type: ADD_WORD, payload: res.data });
    cb();
  } catch (err) {
    dispatch({ type: POSTING_ERROR, payload: handleError(err) });
  }
};
