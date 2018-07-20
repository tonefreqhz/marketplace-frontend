import { combineReducers } from 'redux';

import front from './reducers_front';
import productCategory from './reducers_product_category';
import productBrand from './reducers_product_brand';
import vendorProfile from './reducers_vendor';
import product from './reducers_product';

const rootReducer = combineReducers({
  front,
  productCategory,
  productBrand,
  vendorProfile,
  product
});

export default rootReducer;
