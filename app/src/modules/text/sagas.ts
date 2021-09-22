import {
  getTextAllAsync,
  GET_TEXTALL,
  getTextAsync,
  GET_TEXT,
  postTextAsync,
  POST_TEXT,
} from "./actions";
import { getTextAll, getText, postText } from "api/text";
import { takeEvery } from "redux-saga/effects";
import createAsyncSaga from "lib/createAsyncSaga";

const getTextAllSaga = createAsyncSaga(getTextAllAsync, getTextAll);
const getTextSaga = createAsyncSaga(getTextAsync, getText);
const postTextSaga = createAsyncSaga(postTextAsync, postText);
export function* textSaga() {
  yield takeEvery(GET_TEXTALL, getTextAllSaga);
  yield takeEvery(GET_TEXT, getTextSaga);
  yield takeEvery(POST_TEXT, postTextSaga);
}
