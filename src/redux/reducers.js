import { combineReducers } from 'redux';
import reducer from '../logic/todos';
import visibilityFilterReducer from '../logic/visibilityFilter'

export default function createReducer() {
  return combineReducers({
    todos: reducer,
    visibilityFilter : visibilityFilterReducer
  });
}
