import { 
POST_PRODUCT_BRAND_DETAILS,
FETCH_PRODUCT_BRANDS,
UPDATE_PRODUCT_BRAND_DETAILS,
DELETE_PRODUCT_BRAND
 } from "../actions/actions_product_brand";

const productBrand = (state = {}, action) => {
    let output;
    switch(action.type){
        case POST_PRODUCT_BRAND_DETAILS:
            output = {addBrand: action.payload};
        break;
        case FETCH_PRODUCT_BRANDS:
            output = {brands: action.payload};
        break;
        case UPDATE_PRODUCT_BRAND_DETAILS:
            output = {updateBrand: action.payload}
        break;
        case DELETE_PRODUCT_BRAND:
            output = {deleteBrand: action.payload}
        break;
        default:
            output = state;
        break;
    }

    return output;
}

export default productBrand;