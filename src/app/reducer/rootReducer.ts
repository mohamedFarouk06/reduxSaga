import { combineReducers } from 'redux';
import undoable from 'redux-undo';
import counterReducer from '../reducer/counterReducer';
import dataReducer from '../reducer/dataReducer';

const rootReducer = combineReducers({
  counter: undoable(counterReducer),
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
