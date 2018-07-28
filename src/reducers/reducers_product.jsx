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

import {
    PUT_IMAGE
} from "../actions/actions_imageupload";
    
    const product = (state = {}, action) => {
        let output;
        switch(action.type){
            case POST_PRODUCT_DETAILS:
                output = {addProduct: action.payload.data};
            break;
            case FETCH_PRODUCTS:
            let data = action.payload.status ? action.payload.data: [];
                output = {getAll: data};
            break;
            case UPDATE_PRODUCT_DETAILS:
                output = {updateProduct: action.payload.data}
            break;
            case DELETE_PRODUCT:
                output = {deleteProduct: action.payload.data}
            break;
            case FETCH_PRODUCT_BRANDS:
                output = {productBrands: action.payload.data}
            break;
            case FETCH_PRODUCT_CATEGORIES:
                output = {productCategories: action.payload.data}
            break;
            case PUT_IMAGE:
                output = {updateImage: action.payload.data}
            break;
            default:
                output = state;
            break;
        }
    
        return output;
    }
    
    export default product;