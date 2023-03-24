import {
    ALL_USERS_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    CLEAR_ERRORS
} from "../constants/userActionsTypes";
let usersList = [];
export const userReducers = (state = usersList, action) => {
    switch ( action.type ){
        case ALL_USERS_REQUEST:
            return {
                loading: true,
            };
        case ALL_USERS_SUCCESS:
            return {
                loading: false,
                Users: action.payload,
            };
        case ALL_USERS_FAIL:
            return {
                loading: false,
                message: error.message,
            };
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            };
        default: 
        return state
    }
}