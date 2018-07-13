import { 
POST_PRODUCT_CATEGORY_DETAILS,
FETCH_PRODUCT_CATEGORIES
 } from "../actions/actions_product_category";

const productCategory = (state = {}, action) => {
    switch(action.type){
        case POST_PRODUCT_CATEGORY_DETAILS:
            return action.payload;
        case FETCH_PRODUCT_CATEGORIES:
            return action.payload
        default:
            return state;

    }
}

export default productCategory;