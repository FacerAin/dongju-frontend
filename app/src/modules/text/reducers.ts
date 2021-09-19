import { createReducer } from "typesafe-actions";
import { TextAction, TextState } from "./types";
import { GET_TEXTALL, GET_TEXTALL_SUCCESS, GET_TEXTALL_ERROR } from "./actions";
import { asyncState } from "lib/reducerUtils";

const initialState: TextState = {
  Texts: asyncState.initial(),
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
});

export default text;
