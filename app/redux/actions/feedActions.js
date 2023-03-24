import axios from "axios";
import {
  ALL_FEED_FAIL,
  ALL_FEED_REQUEST,
  ALL_FEED_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/feedActionsTypes";

export const getFeeds = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_FEED_REQUEST });
    const { data } = await axios.get("http://localhost:3000/api/v1/feeds");

    dispatch({
      type: ALL_FEED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_FEED_FAIL,
      payload: error.message,
    });
  }
};

export const clearErrors = () => async(dispatch) => {
    dispatch({type: CLEAR_ERRORS});
}
