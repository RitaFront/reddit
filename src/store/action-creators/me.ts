import { Action, ActionCreator } from 'redux';
import {
  MeActionTypes,
  MeRequestAction,
  MeRequestErrorAction,
  MeRequestSuccessAction,
} from '../types/me';
import { IUserData } from '../../hooks/useUserData';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import axios from 'axios';

export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: MeActionTypes.ME_REQUEST,
});

export const meRequestSuccess: ActionCreator<
  MeRequestSuccessAction
> = (data: IUserData) => ({
  type: MeActionTypes.ME_REQUEST_SUCCESS,
  payload: data,
});

export const meRequestError: ActionCreator<MeRequestErrorAction> = (
  error: Error
) => ({
  type: MeActionTypes.ME_REQUEST_ERROR,
  payload: String(error),
});

export const meRequestAsync =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    dispatch(meRequest());
    axios
      .get('https://oauth.reddit.com/api/v1/me.json', {
        headers: {
          Authorization: `Bearer ${getState().token.token}`,
        },
      })
      .then((res) => {
        const userData = res.data;
        dispatch(
          meRequestSuccess({
            name: userData.name,
            iconImg: userData.icon_img,
          })
        );
      })
      .catch((e) => {
        console.log(e);
        dispatch(meRequestError(e));
      });
  };
