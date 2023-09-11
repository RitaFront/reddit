import { ActionCreator, AnyAction } from 'redux';
import { CHANGE_COMMENT } from '../types/comment';

export const changeComment: ActionCreator<AnyAction> = (text) => ({
  type: CHANGE_COMMENT,
  payload: text,
});
