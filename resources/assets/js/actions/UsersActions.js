import * as types from "@/constants/ActionTypes";
import {getHeaders} from "@/utils/ApiUtil";

export function getUser(id) {
    console.log("getUser");
    return function (dispatch) {
        axios.get("/api/users/" + id, {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(getUserSuccess(res.data.success));
        }).catch(err => {
            dispatch(getUserError(err));
        })
    }    
}

export function getUserSuccess(user) {
    return {
        type: types.GET_USER_SUCCESS,
        user
    };
}

export function getUserError(err) {
    return {
        type: types.GET_USER_ERROR,
        err
    };
}

