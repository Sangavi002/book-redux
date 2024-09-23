import { legacy_createStore, combineReducers } from 'redux';
import {bookReducer} from './reducer';

const rootReducer = combineReducers({
  books: bookReducer,
});

export const store = legacy_createStore(rootReducer);

