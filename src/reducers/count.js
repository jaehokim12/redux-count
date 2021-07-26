import * as actions from '../action/count';

const initialStates = {
  count: 0,
};
const countReducer = (state = initialStates, action) => {
  switch (action.type) {
    case actions.INCREASE:
      return {
        ...state,
        count: state.count + 1,
      };
    case actions.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default countReducer;
