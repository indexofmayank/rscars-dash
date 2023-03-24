import axios from "axios";
import {
  ALL_BLOGS_FAILS,
  ALL_BLOGS_REQUEST,
  ALL_BLOGS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/blogActionsTypes";

export const getBlogs = () => async (disptach) => {
  try {
    disptach({ type: ALL_BLOGS_REQUEST });
    const { data } = await axios.get("http://localhost:3000/api/v1/blogs/");

    disptach({
      type: ALL_BLOGS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    disptach({
      type: ALL_BLOGS_FAILS,
      payload: error.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
