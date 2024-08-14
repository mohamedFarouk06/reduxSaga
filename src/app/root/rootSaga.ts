import { all } from "redux-saga/effects";
import { watchFetchData } from "../saga/dataSaga";
import { watchUndoRedo } from "../saga/sagas";

export default function* rootSaga() {
  yield all([watchUndoRedo(), watchFetchData()]);
}
