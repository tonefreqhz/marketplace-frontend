import { combineReducers } from 'redux';

import front from './reducers_front';
import productCategory from './reducers_product_category'

const rootReducer = combineReducers({
  front,
  productCategory
});

export default rootReducer;
