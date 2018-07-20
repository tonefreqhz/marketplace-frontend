import { 
    POST_PRODUCT_DETAILS,
    FETCH_PRODUCTS,
    UPDATE_PRODUCT_DETAILS,
    DELETE_PRODUCT
     } from "../actions/actions_product";

import {
    FETCH_PRODUCT_BRANDS
} from "../actions/actions_product_brand";

import {
    FETCH_PRODUCT_CATEGORIES
} from "../actions/actions_product_category";
    
    const product = (state = {}, action) => {
        let output;
        switch(action.type){
            case POST_PRODUCT_DETAILS:
                output = {addProduct: action.payload};
            break;
            case FETCH_PRODUCTS:
                output = {getAll: action.payload};
            break;
            case UPDATE_PRODUCT_DETAILS:
                output = {updateProduct: action.payload}
            break;
            case DELETE_PRODUCT:
                output = {deleteProduct: action.payload}
            break;
            case FETCH_PRODUCT_BRANDS:
                output = {productBrands: action.payload}
            break;
            case FETCH_PRODUCT_CATEGORIES:
                output = {productCategories: action.payload}
            break;
            default:
                output = state;
            break;
        }
    
        return output;
    }
    
    export default product;