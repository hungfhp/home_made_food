import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import food from "./food";
import transactions from "./transactions";
import transaction from "./transaction";

export default combineReducers({
    auth,
    user,
    food,
    transactions,
    transaction
});
