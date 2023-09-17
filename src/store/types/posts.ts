import { IPosts } from '../../shared/interfaces';

export interface PostsState {
  loading: boolean;
  error: string;
  data: IPosts[];
  after: string;
  loadMoreCount: number;
}

export enum PostsActionTypes {
  POSTS_REQUEST = 'POSTS_REQUEST',
  POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS',
  POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR',
}

export interface PostsRequestAction {
  type: PostsActionTypes.POSTS_REQUEST;
}

export interface PostsRequestSuccessAction {
  type: PostsActionTypes.POSTS_REQUEST_SUCCESS;
  payload: IPosts[];
  after: string;
  loadMoreCount: number;
}

export interface PostsRequestErrorAction {
  type: PostsActionTypes.POSTS_REQUEST_ERROR;
  payload: string;
}

export type PostsAction =
  | PostsRequestAction
  | PostsRequestSuccessAction
  | PostsRequestErrorAction;
