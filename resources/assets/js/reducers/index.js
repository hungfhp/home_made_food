import { combineReducers } from "redux";
import auth from "./auth";
import user from "./user";
import food from "./food";
import transactions from "./transactions";
import transaction from "./transaction";
import deals from "./deals";
import deal from "./deal";

export default combineReducers({
    auth,
    user,
    food,
    transactions,
    transaction,
    deals,
    deal
});
