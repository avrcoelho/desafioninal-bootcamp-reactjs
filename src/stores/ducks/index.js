import { combineReducers } from 'redux';

import { reducer as login } from './login';
import { reducer as orders } from './orders';

export default combineReducers({
  login,
  orders,
});
