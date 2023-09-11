import { Action, ActionCreator, AnyAction } from 'redux';
import { SET_TOKEN } from '../types/token';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../reducers';
import { useEffect } from 'react';

export const setToken: ActionCreator<AnyAction> = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const saveToken =
  (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    useEffect(() => {
      if (window.__token__.length > 10) {
        dispatch(setToken(window.__token__));
      }
    }, []);
  };
