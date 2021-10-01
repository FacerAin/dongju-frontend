import { createAction, createReducer } from "typesafe-actions";

const CHANGE_SEARCH_WORD = "search/CHANGE_SEARCH_WORD" as const;
const SET_OPTION = "search/SET_OPTION" as const;
type SearchState = {
  searchWord: string;
  option: string;
};

export const changeSearchWord = createAction(
  CHANGE_SEARCH_WORD,
  (searchWord: string) => searchWord
)();

export const setOption = createAction(SET_OPTION, (option: string) => option)();

const initialState: SearchState = {
  option: "title",
  searchWord: "",
};

const search = createReducer(initialState, {
  [CHANGE_SEARCH_WORD]: (state, action) => ({
    ...state,
    searchWord: action.payload,
  }),
  [SET_OPTION]: (state, action) => ({
    ...state,
    option: action.payload,
  }),
});

export default search;
