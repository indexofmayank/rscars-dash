import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {carsReducers} from './reducers/carReducers';
import { testReducers } from "./reducers/testReducers";
import {bookingReducers} from './reducers/bookingReducers';
import {feedReducers} from './reducers/feedReducers';
import { userReducers } from "./reducers/userReducers";
import {blogReducers} from './reducers/blogReducers';

const reducer = combineReducers({
    carReducers: carsReducers,
    homeReducers: testReducers,
    bookingReducers: bookingReducers,
    feedReducers: feedReducers,
    userReducers: userReducers,
    blogReducers: blogReducers,
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;