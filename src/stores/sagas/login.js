import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import LoginActions from '../ducks/login';

export function* login({ email, password }) {
  try {
    const { data } = yield call(api.post, 'sessions', { email, password });

    if (data.type === 1) {
      yield put(LoginActions.setLoginSuccess(data));
    } else {
      yield put(LoginActions.setLoginFailure('Usuário não encontrado'));
    }
  } catch (err) {
    yield put(LoginActions.setLoginFailure('Usuário não encontrado'));
  }
}
