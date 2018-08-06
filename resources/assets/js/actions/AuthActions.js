import * as types from "@/constants/ActionTypes";

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

