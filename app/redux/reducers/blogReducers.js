import {
    ALL_BLOGS_FAIL,
    ALL_BLOGS_REQUEST,
    ALL_BLOGS_SUCCESS,
    CLEAR_ERRORS
} from '../constants/blogActionsTypes';
let blogs = [];
export const blogReducers = (state = blogs, action) => {
    switch (action.type) {
        case ALL_BLOGS_REQUEST:
            return {
                loading: true
            };
        case ALL_BLOGS_SUCCESS:
            return {
                loading: false,
                Blogs: action.payload
            };
        case ALL_BLOGS_FAIL:
            return{
                loading: false,
                message: error.message
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:{
            return state;
        };
    }
}