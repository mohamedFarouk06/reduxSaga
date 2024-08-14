import { createStore, applyMiddleware, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/rootReducer';
import rootSaga from '../root/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer: StoreEnhancer = composeWithDevTools(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;
export default store;