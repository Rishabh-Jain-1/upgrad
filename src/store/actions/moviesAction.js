import { getDataAPI } from "../../services/apiWrapper";
import { SET_LIST } from "./actionTypes";
export const getMoviesList =
  (search, page = 1) =>
  async (dispatch) => {
    const response = await dispatch(getDataAPI(`&s=${search}&page=${page}`));
    dispatch({
      type: SET_LIST,
      payload: {
        list: response?.data.Search || [],
        totalResults: response?.data.totalResults,
      },
    });
  };
