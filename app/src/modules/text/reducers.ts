import { createReducer } from "typesafe-actions";
import { TextAction, TextState } from "./types";
import {
  GET_TEXTALL,
  GET_TEXTALL_SUCCESS,
  GET_TEXTALL_ERROR,
  GET_TEXT,
  GET_TEXT_SUCCESS,
  GET_TEXT_ERROR,
  POST_TEXT,
  POST_TEXT_SUCCESS,
  POST_TEXT_ERROR,
  DELETE_TEXT,
  DELETE_TEXT_SUCCESS,
  DELETE_TEXT_ERROR,
  PUT_TEXT,
  PUT_TEXT_SUCCESS,
  PUT_TEXT_ERROR,
} from "./actions";
import { asyncState } from "lib/reducerUtils";

const initialState: TextState = {
  Texts: asyncState.initial([]),
  Text: asyncState.initial(),
};

const text = createReducer<TextState, TextAction>(initialState, {
  [GET_TEXTALL]: (state) => ({
    ...state,
    Texts: asyncState.load(),
  }),
  [GET_TEXTALL_SUCCESS]: (state, action) => ({
    ...state,
    Texts: asyncState.success(action.payload),
  }),
  [GET_TEXTALL_ERROR]: (state, action) => ({
    ...state,
    Texts: asyncState.error(action.payload),
  }),
  [GET_TEXT]: (state) => ({
    ...state,
    Text: asyncState.load(),
  }),
  [GET_TEXT_SUCCESS]: (state, action) => ({
    ...state,
    Text: asyncState.success(action.payload),
  }),
  [GET_TEXT_ERROR]: (state, action) => ({
    ...state,
    Text: asyncState.error(action.payload),
  }),
  [POST_TEXT]: (state) => ({
    ...state,
    Text: asyncState.load(),
  }),
  [POST_TEXT_SUCCESS]: (state, action) => ({
    ...state,
    Text: asyncState.success(action.payload),
  }),
  [POST_TEXT_ERROR]: (state, action) => ({
    ...state,
    Text: asyncState.error(action.payload),
  }),
  [DELETE_TEXT]: (state) => ({
    ...state,
    Text: asyncState.load(),
  }),
  [DELETE_TEXT_SUCCESS]: (state, action) => ({
    ...state,
    Text: asyncState.success(action.payload),
  }),
  [DELETE_TEXT_ERROR]: (state, action) => ({
    ...state,
    Text: asyncState.error(action.payload),
  }),
  [PUT_TEXT]: (state) => ({
    ...state,
    Text: asyncState.load(),
  }),
  [PUT_TEXT_SUCCESS]: (state, action) => ({
    ...state,
    Text: asyncState.success(action.payload),
  }),
  [PUT_TEXT_ERROR]: (state, action) => ({
    ...state,
    Text: asyncState.error(action.payload),
  }),
});

export default text;
