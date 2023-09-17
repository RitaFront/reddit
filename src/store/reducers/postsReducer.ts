import { Reducer } from 'redux';
import {
  PostsAction,
  PostsActionTypes,
  PostsState,
} from '../types/posts';

const initialState: PostsState = {
  loading: false,
  error: '',
  data: [],
  after: '',
  loadMoreCount: -1,
};

export const postsReducer: Reducer<PostsState, PostsAction> = (
  state = initialState,
  action
): PostsState => {
  switch (action.type) {
    case PostsActionTypes.POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PostsActionTypes.POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        after: action.after,
        loadMoreCount: action.loadMoreCount,
      };
    case PostsActionTypes.POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
