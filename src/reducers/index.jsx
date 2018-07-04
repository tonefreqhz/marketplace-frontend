import { combineReducers } from 'redux';

import info from './reducers_info';
import front from './reducers_front';

const rootReducer = combineReducers({
  info,
  front
});

export default rootReducer;
