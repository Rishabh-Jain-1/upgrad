import {
  CLEAR_LIST,
  DELETE,
  SET_LIST,
  SORT_ASC,
  SORT_DSC,
  UPDATE_DATA,
} from "../actions/actionTypes";

const movieReducer = (state = null, action) => {
  switch (action.type) {
    case SET_LIST:
      return action.payload;
    case SORT_ASC:
      return {
        ...state,
        list: state.list.sort((a, b) => {
          return a.Title > b.Title ? 1 : -1;
        }),
      };

    case SORT_DSC:
      return {
        ...state,
        list: state.list.sort((a, b) => {
          return a.Title > b.Title ? -1 : 1;
        }),
      };
    case UPDATE_DATA:
      const arr = state.list.map((data) => {
        if (data.imdbID === action.payload.imdbID) {
          return action.payload;
        } else return data;
      });
      return {
        ...state,
        list: arr,
      };
    case DELETE:
      return {
        ...state,
        list: state.list.filter((data) => data.imdbID !== action.payload),
      };
    case CLEAR_LIST:
      return {};
    default:
      return state;
  }
};
export default movieReducer;
