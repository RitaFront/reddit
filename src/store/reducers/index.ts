import { combineReducers } from 'redux';
import { commentReducer } from './commentReducer';
import { tokenReducer } from './tokenReducer';
import { meReducer } from './meReducer';

export const rootReducer = combineReducers({
  comment: commentReducer,
  token: tokenReducer,
  me: meReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
