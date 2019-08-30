import { FETCH_RESTROOMS } from "./types";
import {combineReducers} from "redux";
import currentRestroom from './currentRestroomReducer';

export default combineReducers ({

    currentRestroom,
})