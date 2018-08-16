import * as types from "@/constants/ActionTypes";
import {getHeaders, getPagination} from "@/utils/ApiUtil";

export function getUser(id) {
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

export function getCookedFoods(id, page) {
    if (!page) {page = 1;}
    return function (dispatch) {
        axios.get("/api/users/" + id + "/cooked_foods" + "?page="+page, {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(getCookedFoodsSuccess(res.data));
        }).catch(err => {
            dispatch(getCookedFoodsError(err));
        })
    }    
}

export function getCookedFoodsSuccess(data) {
    return {
        type: types.GET_COOKED_FOODS_SUCCESS,
        data: getPagination(data.data)
    };
}

export function getCookedFoodsError(err) {
    return {
        type: types.GET_COOKED_FOODS_ERROR,
        err
    };
}

export function getLikedFoods(id, page) {    
    return function (dispatch) {
        axios.get("/api/users/" + id +"/liked_foods" + "?page="+page, {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(getLikedFoodsSuccess(res.data));
        }).catch(err => {
            dispatch(getLikedFoodsError(err));
        })
    }    
}

export function getLikedFoodsSuccess(data) {
    return {
        type: types.GET_LIKED_FOODS_SUCCESS,
        data: getPagination(data.data)
    };
}

export function getLikedFoodsError(err) {
    return {
        type: types.GET_LIKED_FOODS_ERROR,
        err
    };
}

export function getFavoritedFoods(id, page) {
    if (!page) {page = 1;}
    return function (dispatch) {
        axios.get("/api/users/" + id +"/favorited_foods" + "?page="+page, {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(getFavoritedFoodsSuccess(res.data));
        }).catch(err => {
            dispatch(getFavoritedFoodsError(err));
        })
    }    
}

export function getFavoritedFoodsSuccess(data) {
    return {
        type: types.GET_FAVORITED_FOODS_SUCCESS,
        data: getPagination(data.data)
    };
}

export function getFavoritedFoodsError(err) {
    return {
        type: types.GET_FAVORITED_FOODS_ERROR,
        err
    };
}

