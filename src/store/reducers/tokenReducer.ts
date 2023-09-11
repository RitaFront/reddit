import { Reducer } from 'redux';
import { SET_TOKEN, TokenState } from '../types/token';

const initialState: TokenState = {
  token: '',
};

export const tokenReducer: Reducer<TokenState> = (
  state = initialState,
  action
): TokenState => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
