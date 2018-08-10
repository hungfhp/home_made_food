import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import food from "./food";

export default combineReducers({
    auth,
    user,
    food
});
