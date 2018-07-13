import { POST_PRODUCT_CATEGORY_DETAILS } from "../actions/actions_product_category";

const productCategory = (state = {}, action) => {
    switch(action.type){
        case POST_PRODUCT_CATEGORY_DETAILS:
            return action.payload;
        default:
            return state;

    }
}

export default productCategory;