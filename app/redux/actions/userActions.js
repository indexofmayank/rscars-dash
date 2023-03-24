import axios from "axios";
import {
  ALL_USERS_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userActionsTypes";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });
    const { data } = await axios.get(
      "http://localhost:3000/api/v1/users/admin/users"
    );

    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload: data,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
