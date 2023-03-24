import axios from 'axios'

import {
    ALL_CARS_FAIL,
    ALL_CARS_REQUEST,
    ALL_CARS_SUCCESS,
    CLEAR_ERRORS
} from '../constants/carActionsTypes';

export const getCars = () => async(dispatch) => {
    try {
        dispatch({type: ALL_CARS_REQUEST});
        const {data} = await axios.get("http://localhost:3000/api/v1/cars");

        dispatch({
            type: ALL_CARS_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_CARS_FAIL,
            payload: error.message,
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
};