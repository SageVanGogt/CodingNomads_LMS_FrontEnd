import { combineReducers } from 'redux';
import signinReducer from './signinReducer';
import { currentTaskReducer } from './currentTaskReducer';
import { currentCourseReducer } from './currentCourseReducer';

export const rootReducer = combineReducers({
  user: signinReducer,
  currentTask: currentTaskReducer,
  currentCourse: currentCourseReducer
});
