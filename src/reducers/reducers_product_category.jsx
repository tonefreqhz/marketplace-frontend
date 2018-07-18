import { 
POST_PRODUCT_CATEGORY_DETAILS,
FETCH_PRODUCT_CATEGORIES,
UPDATE_PRODUCT_CATEGORY_DETAILS,
DELETE_PRODUCT_CATEGORY
 } from "../actions/actions_product_category";

const productCategory = (state = {}, action) => {
    let output;
    switch(action.type){
        case POST_PRODUCT_CATEGORY_DETAILS:
            output = {addCategory: action.payload};
        break;
        case FETCH_PRODUCT_CATEGORIES:
            output = {categories: action.payload};
        break;
        case UPDATE_PRODUCT_CATEGORY_DETAILS:
            output = {updateCategory: action.payload}
        break;
        case DELETE_PRODUCT_CATEGORY:
            output = {deleteCategory: action.payload}
        break;
        default:
            output = state;
        break;
    }

    return output;
}

export default productCategory;