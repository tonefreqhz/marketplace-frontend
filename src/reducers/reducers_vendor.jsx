import {
    UPDATE_VENDOR_PROFILE,
    FETCH_VENDOR_PROFILE
} from "../actions/actions_vendor";

const vendorProfile = (state = {}, actions) => {
    let output;
    switch(actions.type){
        case UPDATE_VENDOR_PROFILE:
            output = {updateProfile: actions.payload};
        break;
        case FETCH_VENDOR_PROFILE:
            output = {getProfile: actions.payload};
        break;
        default:
            output = state;
        break;
    }

    return output;
}

export default vendorProfile; 