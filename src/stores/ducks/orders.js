import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  setOrdersRequest: null,
  setOrdersSuccess: ['orders'],
  setOrdersFailure: ['error'],
  setNewOrder: ['order'],
});

export const OrdersTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  orders: [],
  loading: false,
  error: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ORDERS_REQUEST]: state => state.merge({ error: null, loading: true }),
  [Types.SET_ORDERS_SUCCESS]: (state, { orders }) => state.merge({ orders, loading: false }),
  [Types.SET_ORDERS_FAILURE]: (state, { error }) => state.merge({ error, loading: false }),
  [Types.SET_NEW_ORDER]: (state, { order }) => state.merge({
    orders: [...state.orders, order],
  }),
});
