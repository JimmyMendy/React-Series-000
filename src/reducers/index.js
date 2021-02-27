import counter from './counter';
import currentUser from './currentUser';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  counter: counter,
  currentUser: currentUser
});

export default rootReducers;