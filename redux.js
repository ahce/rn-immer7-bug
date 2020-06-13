import {createActions, createReducer} from 'reduxsauce';
import produce from 'immer';
// import produce from 'immer-v6';

const {Types, Creators} = createActions({
  setCount: ['value'],
});

const INITIAL_STATE = {
  count: 1,
};

const setCount = produce((draft, {value}) => {
  draft.count = value;
});

const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_COUNT]: setCount,
});

export {reducer};
export default Creators;
