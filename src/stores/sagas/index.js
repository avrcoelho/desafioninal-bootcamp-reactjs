import { all, takeLatest } from 'redux-saga/effects';

import { LoginTypes } from '../ducks/login';
import { OrdersTypes } from '../ducks/orders';

import { login } from './login';
import { orders } from './orders';

export default function* rootSaga() {
  return yield all([
    takeLatest(LoginTypes.SET_LOGIN_REQUEST, login),
    takeLatest(OrdersTypes.SET_ORDERS_REQUEST, orders),
  ]);
}
