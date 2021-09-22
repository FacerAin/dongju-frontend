import {
  getTextAllAsync,
  GET_TEXTALL,
  getTextAsync,
  GET_TEXT,
} from "./actions";
import { getTextAll, getText } from "api/text";
import { takeEvery } from "redux-saga/effects";
import createAsyncSaga from "lib/createAsyncSaga";

const getTextAllSaga = createAsyncSaga(getTextAllAsync, getTextAll);
const getTextSaga = createAsyncSaga(getTextAsync, getText);
export function* textSaga() {
  yield takeEvery(GET_TEXTALL, getTextAllSaga);
  yield takeEvery(GET_TEXT, getTextSaga);
}
