import { fieldReducer } from './fieldReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  field: fieldReducer,
});