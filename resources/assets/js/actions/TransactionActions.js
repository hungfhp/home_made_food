import * as types from "@/constants/ActionTypes";
import {getHeaders, getPagination} from "@/utils/ApiUtil";

// getTransaction
export function getTransaction(id) {
    return function (dispatch) {
        axios.get("/api/transactions/" + id, {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(getTransactionSuccess(res.data.data));
        }).catch(err => {
            dispatch(getTransactionError(err));
        })
    }    
}

export function getTransactionSuccess(data) {
    return {
        type: types.GET_FOOD_SUCCESS,
        data
    };
}

export function getTransactionError(err) {
    return {
        type: types.GET_FOOD_ERROR,
        err
    };
}
// createTransaction
export function createTransaction(food) {
    return function (dispatch) {
        axios({
            method: 'POST',
            url: "/api/transactions/",
            data: food,
            headers: getHeaders()
        })
        .then(res => {
            dispatch(createTransactionSuccess(res.data.data));
        }).catch(err => {
            dispatch(createTransactionError(err));
        })
    }    
}

export function createTransactionSuccess(data) {
    return {
        type: types.CREATE_FOOD_SUCCESS,
        data
    };
}

export function createTransactionError(err) {
    return {
        type: types.CREATE_FOOD_ERROR,
        err
    };
}
// updateTransaction
export function updateTransaction(transaction) {
    return function (dispatch) {
        axios({
            method: 'PUT',
            url: "/api/transactions/" + transaction.id,
            data: transaction,
            headers: getHeaders()
        })
        .then(res => {
            dispatch(updateTransactionSuccess(res.data.data));
        }).catch(err => {
            dispatch(updateTransactionError(err));
        })
    }    
}

export function updateTransactionSuccess(data) {
    return {
        type: types.UPDATE_TRANSACTION_SUCCESS,
        data
    };
}

export function updateTransactionError(err) {
    return {
        type: types.UPDATE_TRANSACTION_ERROR,
        err
    };
}
// deleteTransaction
export function deleteTransaction(id) {
    return function (dispatch) {
        axios.delete("/api/transactions/" + id, {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(deleteTransactionSuccess(res.data.data));
        }).catch(err => {
            dispatch(deleteTransactionError(err));
        })
    }    
}

export function deleteTransactionSuccess(data) {
    return {
        type: types.DELETE_FOOD_SUCCESS,
        data
    };
}

export function deleteTransactionError(err) {
    return {
        type: types.DELETE_FOOD_ERROR,
        err
    };
}
