import * as CommentActionCreators from './comment';
import * as TokenActionCreators from './token';
import * as MeActionCreators from './me';

const ActionCreators = {
  ...CommentActionCreators,
  ...TokenActionCreators,
  ...MeActionCreators,
};

export default ActionCreators;
