import { Reducer } from 'redux';
import { CHANGE_COMMENT, CommentState } from '../types/comment';

const initialState: CommentState = {
  commentText: '',
};

export const commentReducer: Reducer<CommentState> = (
  state = initialState,
  action
): CommentState => {
  switch (action.type) {
    case CHANGE_COMMENT:
      return { ...state, commentText: action.payload };
    default:
      return state;
  }
};
