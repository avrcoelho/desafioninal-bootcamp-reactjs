import { combineReducers } from 'redux';

import { reducer as login } from './login';

export default combineReducers({
  login,
});
