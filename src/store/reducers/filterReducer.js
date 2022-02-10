import { CLEAR_SEARCH, SET_SEARCH } from "../actions/actionTypes";

const filterReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: "",
      };
    default:
      return state;
  }
};
export default filterReducer;
