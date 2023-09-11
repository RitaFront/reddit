import { IUserData } from '../../hooks/useUserData';

export interface MeState {
  loading: boolean;
  error: string;
  data: IUserData;
}

export enum MeActionTypes {
  ME_REQUEST = 'ME_REQUEST',
  ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS',
  ME_REQUEST_ERROR = 'ME_REQUEST_ERROR',
}

export interface MeRequestAction {
  type: MeActionTypes.ME_REQUEST;
}

export interface MeRequestSuccessAction {
  type: MeActionTypes.ME_REQUEST_SUCCESS;
  payload: IUserData;
}

export interface MeRequestErrorAction {
  type: MeActionTypes.ME_REQUEST_ERROR;
  payload: string;
}

export type MeAction =
  | MeRequestAction
  | MeRequestSuccessAction
  | MeRequestErrorAction;
