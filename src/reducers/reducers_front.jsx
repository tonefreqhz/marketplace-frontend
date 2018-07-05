import { SLIDERS, CATEGORIES, VENDORS } from '../actions/actions_front';

const front = (state = {
  sliders: [],
  categories: [],
  vendors: []
}, action) => {
  switch (action.type) {
    case SLIDERS:
      return Object.assign({}, state, action.payload);
    case CATEGORIES:
      return Object.assign({}, state, action.payload);
    case VENDORS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default front;
