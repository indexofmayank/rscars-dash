import {
  ALL_CARS_FAIL,
  ALL_CARS_REQUEST,
  ALL_CARS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/carActionsTypes";
let cars = []
export const carsReducers = (state = cars, action) => {
  switch (action.type) {
    case ALL_CARS_REQUEST:
      return {
        loading: true,
      };

    case ALL_CARS_SUCCESS:
      return {
        loading: false,
        Cars: action.payload,
      };

    case ALL_CARS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
