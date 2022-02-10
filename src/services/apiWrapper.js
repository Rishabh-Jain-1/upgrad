import axios from "axios";
import { SET_ALERT } from "../store/actions/actionTypes";
const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const getDataAPI = (url) => async (dispatch) => {
  try {
    dispatch({ type: SET_ALERT, payload: { loading: true } });
    const res = await axios.get(`${apiUrl}${url}`);
    dispatch({ type: SET_ALERT, payload: { loading: false } });

    return { ...res, isSuccess: true };
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: { loading: false } });
    return { ...error, isSuccess: false };
  }
};
