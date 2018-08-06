import * as types from "@/constants/ActionTypes";
import {getHeaders} from "@/utils/ApiUtil";

export function profile() {
    return {
        type: types.PROFILE
    };
}

export function loginSuccess(user) {
    return {
        type: types.LOGIN_SUCCESS,
        user
    };
}

export function logoutSuccess() {
    return {
        type: types.LOGOUT_SUCCESS
    };
}

function getProfileSuccess(res) {
    return {
        type: types.GET_PROFILE_SUCCESS,
        payload: res
    }
}

function getProfileError(err) {
    return {
        type: types.GET_PROFILE_ERROR,
        payload: err
    }
}
export function getProfile() {
    if (localStorage.getItem("b_token")) {
        console.log('sdf');
        return function (dispatch) {
            axios.get("/api/profile", {
                headers: getHeaders()
            })
            .then(res => {
                dispatch(getProfileSuccess(res.data.success));
            }).catch(err => {
                dispatch(getProfileError(err))
            })
        }    
    } else {
        return function(dispatch) {
            dispatch({type: "UNAUTHORIZED"});
        }
    }
}