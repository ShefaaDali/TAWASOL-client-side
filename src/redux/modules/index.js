import {combineReducers} from "redux";
import users from"./users";
import posts from"./posts";
import profiles from"./profiles";
import alerts from"./alerts";

export default combineReducers({
    users,alerts,posts,profiles
})