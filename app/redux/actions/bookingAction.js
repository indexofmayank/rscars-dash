import axios from "axios";
import {
    ALL_BOOKING_FAIL,
    ALL_BOOKING_REQUEST,
    ALL_BOOKING_SUCCESS,
    CLEAR_ERRORS
} from "../constants/bookingActionsTypes"
export const getBookings = () => async(dispatch) => {
    try {
        dispatch({type: ALL_BOOKING_REQUEST});
        const {data} = await axios.get("http://localhost:3000/api/v1/orders");

        dispatch({
            type: ALL_BOOKING_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_BOOKING_FAIL,
            payload: error.message,
        });
    }
};

export const clearErrors = () => async(dispacth) => {
    dispacth({type: CLEAR_ERRORS});
}