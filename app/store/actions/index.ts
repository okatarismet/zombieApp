// export action creators
import * as loginActions from './loginActions';
import * as navigationActions from './navigationActions';
import * as themeActions from './themeActions';
import * as habitActions from './habitActions';

export const ActionCreators = Object.assign(
  {},
  loginActions,
  navigationActions,
  themeActions,
  habitActions,
);
