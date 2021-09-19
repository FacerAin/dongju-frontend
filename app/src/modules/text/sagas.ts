import { getTextAllAsync, GET_TEXTALL } from "./actions";
import { getTextAll } from "api/text";
import { takeEvery } from "redux-saga/effects";
import createAsyncSaga from "lib/createAsyncSaga";

const getTextAllSaga = createAsyncSaga(getTextAllAsync, getTextAll);
export function* textSaga() {
  yield takeEvery(GET_TEXTALL, getTextAllSaga);
}
