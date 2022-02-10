import { CLEAR_ALERT, SET_ALERT } from "../actions/actionTypes";

const initialState = {};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case CLEAR_ALERT:
      return {};

    default:
      return state;
  }
};

export default alertReducer;
