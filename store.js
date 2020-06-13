import {createStore, combineReducers} from 'redux';
import {reducer} from './redux';

const rootReducer = combineReducers({
  app: reducer,
});

const store = createStore(rootReducer);

export default store;
