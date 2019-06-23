import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  // passa o nome das actions
  setDataUser: ['data'],
});

export const UserTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  data: null,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_DATA_USER]: (state, { data }) => state.merge({ data }),
});
