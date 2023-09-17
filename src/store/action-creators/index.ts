import * as CommentActionCreators from './comment';
import * as TokenActionCreators from './token';
import * as MeActionCreators from './me';
import * as PostsActionCreators from './posts';

const ActionCreators = {
  ...CommentActionCreators,
  ...TokenActionCreators,
  ...MeActionCreators,
  ...PostsActionCreators,
};

export default ActionCreators;
