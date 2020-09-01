import { combineReducers } from 'redux'
// import todos from './todos'
import todosReducer from '../features/todos/todosSlice';
import visibilityFilterReducer from '../features/filters/filtersSlice'

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
})
