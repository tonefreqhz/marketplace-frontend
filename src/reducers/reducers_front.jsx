import { SLIDERS, CATEGORIES } from '../actions/actions_front';

const front = (state = {
  sliders: [],
  categories: []
}, action) => {
  switch (action.type) {
    case SLIDERS:
      return Object.assign({}, state, action.payload);
    case CATEGORIES:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default front;
