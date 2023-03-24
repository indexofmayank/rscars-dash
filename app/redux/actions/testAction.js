import axios  from "axios";

import {
    TEST_FAIL,
    TEST_REQUEST,
    TEST_SUCCESS,
    CLEAR_ERRORS
} from '../constants/testActionsTypes';

export const getTest = () => async(dispatch) => {
    try {
        dispatch({type: TEST_REQUEST});
        const text = await axios.get("http://localhost:3000/api/v1");

        dispatch({
            type: TEST_SUCCESS,
            payload: text,
        });
    } catch (error) {
        dispatch({
            type: TEST_FAIL,
            payload: error.message
        });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS});
};