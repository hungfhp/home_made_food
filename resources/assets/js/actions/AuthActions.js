import * as types from "@/constants/ActionTypes";
import {getHeaders} from "@/utils/ApiUtil";

export function profile() {
    return {
        type: types.PROFILE
    };
}

export function register(user) {
    return function (dispatch) {
        axios({
            method: 'POST',
            url: '/api/register',
            data: user
        })
        .then(res => {
            dispatch(registerSuccess(res.data.success));
        }).catch(err => {
            dispatch(registerError(err))
        })
    }    
}

export function registerSuccess(user) {
    return {
        type: types.REGISTER_SUCCESS,
        user
    };
}

export function registerError(err) {
    return {
        type: types.REGISTER_ERROR,
        err
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

export function getProfile() {
    if (localStorage.getItem("b_token")) {
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

export function updateProfile(user) {
    if (localStorage.getItem("b_token")) {
        return function (dispatch) {
            axios({
                method: 'PUT',
                url: '/api/profile',
                data: user,
                headers: getHeaders()
            })
            .then(res => {
                dispatch(updateProfileSuccess(res.data.success));
            }).catch(err => {
                dispatch(updateProfileError(err))
            })
        }    
    } else {
        return function(dispatch) {
            dispatch({type: "UNAUTHORIZED"});
        }
    }
}

function updateProfileSuccess(user) {
    return {
        type: types.UPDATE_PROFILE_SUCCESS,
        user
    }
}

function updateProfileError(err) {
    return {
        type: types.UPDATE_PROFILE_ERROR,
        err
    }
}
