import { combineReducers } from 'redux';

import front from './reducers_front';
import productCategory from './reducers_product_category';
import productBrand from './reducers_product_brand';

const rootReducer = combineReducers({
  front,
  productCategory,
  productBrand,
});

export default rootReducer;
