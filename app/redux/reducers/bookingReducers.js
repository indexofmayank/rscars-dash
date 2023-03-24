import {
  ALL_BOOKING_FAIL,
  ALL_BOOKING_REQUEST,
  ALL_BOOKING_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/bookingActionsTypes";
import bookingsData from "../../../data/booking";

let bookings = [];

export const bookingReducers = (state = bookings, action) => {
  switch (action.type) {
    case ALL_BOOKING_REQUEST:
      return {
        loading: true,
      };
    case ALL_BOOKING_SUCCESS:
      return {
        loading: false,
        Bookings: action.payload,
      };

    case ALL_BOOKING_FAIL:
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
