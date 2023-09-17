import { combineReducers } from 'redux';
import { commentReducer } from './commentReducer';
import { tokenReducer } from './tokenReducer';
import { meReducer } from './meReducer';
import { postsReducer } from './postsReducer';

export const rootReducer = combineReducers({
  comment: commentReducer,
  token: tokenReducer,
  me: meReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
