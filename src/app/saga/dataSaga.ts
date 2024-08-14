import {
  call,
  put,
  takeLatest,
  CallEffect,
  PutEffect,
} from "redux-saga/effects";
import {
  FETCH_DATA_REQUEST,
  fetchDataSuccess,
  fetchDataFailure,
} from "../actions/actionsType";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type FetchDataSagaReturn = Generator<
  CallEffect | PutEffect<any>,
  void,
  Response
>;

function* fetchDataSaga(): FetchDataSagaReturn {
  try {
    const response: Response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data: Post[] = yield response.json();
    yield put(fetchDataSuccess(data));
  } catch (error: any) {
    yield put(fetchDataFailure(error.toString()));
  }
}

export function* watchFetchData() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchDataSaga);
}
