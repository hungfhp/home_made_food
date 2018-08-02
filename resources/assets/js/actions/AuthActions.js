import * as types from "@/constants/ActionTypes";

export function profile() {
    return {
        type: types.PROFILE
    };
}

export function login(email, password) {
    return {
        type: types.LOGIN,
        email: email,
        password: password
    };
}
