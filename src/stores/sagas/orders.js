import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import OrdersActions from '../ducks/orders';

export function* orders() {
  try {
    const { data } = yield call(api.get, 'orders');

    yield put(OrdersActions.setOrdersSuccess(data));
  } catch (err) {
    yield put(OrdersActions.setOrdersFailure(err));
  }
}
