import * as types from "@/constants/ActionTypes";
import {getHeaders} from "@/utils/ApiUtil";

// getFood
export function getFood(id) {
    return function (dispatch) {
        axios.get("/api/foods/" + id, {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(getFoodSuccess(res.data.data));
        }).catch(err => {
            dispatch(getFoodError(err));
        })
    }    
}

export function getFoodSuccess(data) {
    return {
        type: types.GET_FOOD_SUCCESS,
        data
    };
}

export function getFoodError(err) {
    return {
        type: types.GET_FOOD_ERROR,
        err
    };
}
// createFood
export function createFood(food) {
    return function (dispatch) {
        axios({
            method: 'POST',
            url: "/api/foods/",
            data: food,
            headers: getHeaders()
        })
        .then(res => {
            dispatch(createFoodSuccess(res.data.data));
        }).catch(err => {
            dispatch(createFoodError(err));
        })
    }    
}

export function createFoodSuccess(data) {
    return {
        type: types.CREATE_FOOD_SUCCESS,
        data
    };
}

export function createFoodError(err) {
    return {
        type: types.CREATE_FOOD_ERROR,
        err
    };
}
// updateFood
export function updateFood(food) {
    return function (dispatch) {
        axios({
            method: 'PUT',
            url: "/api/foods/" + food.id,
            data: food,
            headers: getHeaders()
        })
        .then(res => {
            dispatch(updateFoodSuccess(res.data.data));
        }).catch(err => {
            dispatch(updateFoodError(err));
        })
    }    
}

export function updateFoodSuccess(data) {
    return {
        type: types.UPDATE_FOOD_SUCCESS,
        data
    };
}

export function updateFoodError(err) {
    return {
        type: types.UPDATE_FOOD_ERROR,
        err
    };
}
// deleteFood
export function deleteFood(id) {
    return function (dispatch) {
        axios.delete("/api/foods/" + id, {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(deleteFoodSuccess(res.data.data));
        }).catch(err => {
            dispatch(deleteFoodError(err));
        })
    }    
}

export function deleteFoodSuccess(data) {
    return {
        type: types.DELETE_FOOD_SUCCESS,
        data
    };
}

export function deleteFoodError(err) {
    return {
        type: types.DELETE_FOOD_ERROR,
        err
    };
}