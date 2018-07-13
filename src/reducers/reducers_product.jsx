import { POST_PRODUCT_DETAILS } from "../actions/actions_product";

const product = (state = {}, action) => {
    switch(action.type){
        case POST_PRODUCT_DETAILS:
            return action.payload;
        default:
            return state;

    }
}

export default product;