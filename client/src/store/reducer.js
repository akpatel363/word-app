import {
  ADD_WORD,
  FETCHING_ERROR,
  FETCHING_STARTED,
  FETCH_WORDS,
  POSTING_ERROR,
  POSTING_WORD,
  SET_SEARCH,
} from "./actions";

//Initial State for Redux Store
const initialState = {
  posting: false,
  postingError: null,
  loading: false,
  error: null,
  search: "",
  words: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      //Setting the search string
      return { ...state, search: payload };
    case FETCHING_STARTED:
      //Started Fetching the words
      return { ...state, loading: true, error: null };
    case FETCH_WORDS:
      //Words Fetched
      return { ...state, loading: false, words: payload };
    case FETCHING_ERROR:
      //Error while fetching words
      return { ...state, loading: false, error: payload };
    case POSTING_WORD:
      //Posting a new word
      return { ...state, posting: true, postingError: null };
    case ADD_WORD:
      //Word added
      return { ...state, posting: false, words: [payload].concat(state.words) };
    case POSTING_ERROR:
      //Error while posting the word
      return { ...state, posting: false, postingError: payload };
    default:
      return state;
  }
};

export default reducer;
