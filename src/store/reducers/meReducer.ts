import { Reducer } from 'redux';
import { MeAction, MeActionTypes, MeState } from '../types/me';

const initialState: MeState = {
  loading: false,
  error: '',
  data: {},
};

export const meReducer: Reducer<MeState, MeAction> = (
  state = initialState,
  action
): MeState => {
  switch (action.type) {
    case MeActionTypes.ME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MeActionTypes.ME_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case MeActionTypes.ME_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};
