import { combineReducers } from 'redux';

import { reducer as login } from './login';
import { reducer as orders } from './orders';
import { reducer as user } from './user';

export default combineReducers({
  login,
  orders,
  user,
});
