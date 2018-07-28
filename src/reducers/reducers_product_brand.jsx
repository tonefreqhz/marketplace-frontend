import { 
POST_PRODUCT_BRAND_DETAILS,
FETCH_PRODUCT_BRANDS,
UPDATE_PRODUCT_BRAND_DETAILS,
DELETE_PRODUCT_BRAND
 } from "../actions/actions_product_brand";

 import {
     PUT_IMAGE
 } from "../actions/actions_imageupload";

const productBrand = (state = {}, action) => {
    let output;
    switch(action.type){
        case POST_PRODUCT_BRAND_DETAILS:
            output = {addBrand: action.payload.data};
        break;
        case FETCH_PRODUCT_BRANDS:
            output = {brands: action.payload.data};
        break;
        case UPDATE_PRODUCT_BRAND_DETAILS:
            output = {updateBrand: action.payload.data}
        break;
        case DELETE_PRODUCT_BRAND:
            output = {deleteBrand: action.payload.data}
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

export default productBrand;