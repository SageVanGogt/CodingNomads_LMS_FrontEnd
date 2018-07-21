import { combineReducers } from 'redux';
import signinReducer from './signinReducer';

export const rootReducer = combineReducers({
  user: signinReducer
});