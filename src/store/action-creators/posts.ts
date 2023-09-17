import { Action, ActionCreator } from 'redux';
import {
  PostsActionTypes,
  PostsRequestAction,
  PostsRequestErrorAction,
  PostsRequestSuccessAction,
} from '../types/posts';
import { IPosts } from '../../shared/interfaces';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import axios from 'axios';
import { getTimePost } from '../../utils/js';

export const postsRequest: ActionCreator<
  PostsRequestAction
> = () => ({
  type: PostsActionTypes.POSTS_REQUEST,
});

export const postsRequestSuccess: ActionCreator<
  PostsRequestSuccessAction
> = (data: IPosts[], after: string, loadMoreCount: number) => ({
  type: PostsActionTypes.POSTS_REQUEST_SUCCESS,
  payload: data,
  after,
  loadMoreCount,
});

export const postsRequestError: ActionCreator<
  PostsRequestErrorAction
> = (error: Error) => ({
  type: PostsActionTypes.POSTS_REQUEST_ERROR,
  payload: String(error),
});

export const postsRequestAsync =
  (
    loadMoreCount: number
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch(postsRequest());
    axios
      .get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: {
          Authorization: `Bearer ${getState().token.token}`,
        },
        params: {
          limit: 5,
          after: getState().posts.after ? getState().posts.after : '',
        },
      })
      .then((res) => {
        const after: string = res.data.data.after;
        const posts: IPosts[] = res.data.data.children.map(
          (post: any) => {
            return {
              id: post.data.id,
              title: post.data.title,
              author: post.data.author,
              avatarSrc: post.data.sr_detail.icon_img
                ? post.data.sr_detail.icon_img
                : undefined,
              preview: post.data.preview?.images
                ? post.data.preview.images?.[0].source.url.replace(
                    /(\&amp\;)/g,
                    '&'
                  )
                : undefined,
              createdAt: getTimePost(post.data.created_utc),
              rating: post.data.ups,
            };
          }
        );
        return { posts, after };
      })
      .then(({ posts, after }) => {
        if (getState().posts.after !== after) {
          dispatch(
            postsRequestSuccess(
              getState().posts.data
                ? [...getState().posts.data, ...posts]
                : [...posts],
              after,
              loadMoreCount
            )
          );
        } else return;
      })
      .catch((err) => {
        dispatch(postsRequestError(err));
      });
  };
