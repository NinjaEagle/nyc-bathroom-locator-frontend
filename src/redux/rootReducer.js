import {combineReducers} from 'redux';
import currentRestroom from './currentRestroomReducer';
import loggedIn from "./loggedInReducer";
import currentUser from "./currentUserReducer";

export default combineReducers ({
    currentRestroom, loggedIn, currentUser
})