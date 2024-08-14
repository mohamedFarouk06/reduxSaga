import { takeLatest, put, select } from 'redux-saga/effects';
import { UNDO_ACTION, REDO_ACTION } from '../actions/actions';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import { AppState } from '../store/store';

const canUndo = (state: AppState) => state.counter.past.length > 0;
const canRedo = (state: AppState) => state.counter.future.length > 0;

function* handleUndo(): Generator<any, void, any> {
  const undoPossible: boolean = yield select(canUndo);
  if (undoPossible) {
    yield put(UndoActionCreators.undo());
  }
}

function* handleRedo(): Generator<any, void, any> {
  const redoPossible: boolean = yield select(canRedo);
  if (redoPossible) {
    yield put(UndoActionCreators.redo());
  }
}

export function* watchUndoRedo() {
  yield takeLatest(UNDO_ACTION, handleUndo);
  yield takeLatest(REDO_ACTION, handleRedo);
}
