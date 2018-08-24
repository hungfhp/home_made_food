import * as types from "@/constants/ActionTypes";
import {getHeaders, getPagination} from "@/utils/ApiUtil";

// getTransactions
export function getTransactions(params) {
    return function (dispatch) {
        axios.get("/api/transactions" + "?page="+params.page + "&status="+params.status)
        .then(res => {
            dispatch(getTransactionsSuccess(res.data.data));
        }).catch(err => {
            dispatch(getTransactionsError(err));
        })
    }    
}

export function getTransactionsSuccess(data) {
    return {
        type: types.GET_TRANSACTIONS_SUCCESS,
        data: getPagination(data)
    };
}

export function getTransactionsError(err) {
    return {
        type: types.GET_TRANSACTIONS_ERROR,
        err
    };
}

// getTransactionsRecent
export function getTransactionsRecent(params) {
    return function (dispatch) {
        axios.get("/api/transactions" + "?page="+params.page + "&status=recent")
        .then(res => {
            dispatch(getTransactionsRecentSuccess(res.data.data));
        }).catch(err => {
            dispatch(getTransactionsRecentError(err));
        })
    }    
}

export function getTransactionsRecentSuccess(data) {
    return {
        type: types.GET_TRANSACTIONS_RECENT_SUCCESS,
        data: getPagination(data)
    };
}

export function getTransactionsRecentError(err) {
    return {
        type: types.GET_TRANSACTIONS_RECENT_ERROR,
        err
    };
}

// getTransactionsHitory
export function getTransactionsHitory(params) {
    return function (dispatch) {
        axios.get("/api/transactions/history" + "?page="+params.page + "&status="+params.status , {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(getTransactionsHitorySuccess(res.data.data));
        }).catch(err => {
            dispatch(getTransactionsHitoryError(err));
        })
    }    
}

export function getTransactionsHitorySuccess(data) {
    return {
        type: types.GET_TRANSACTIONS_HISTORY_SUCCESS,
        data: getPagination(data)
    };
}

export function getTransactionsHitoryError(err) {
    return {
        type: types.GET_TRANSACTIONS_HISTORY_ERROR,
        err
    };
}

// getTransactionsHitory Total
export function getTransactionsHitoryTotal() {
    return function (dispatch) {
        axios.get("/api/transactions/history/total", {
            headers: getHeaders()
        })
        .then(res => {
            dispatch(getTransactionsHitoryTotalSuccess(res.data.data));
        }).catch(err => {
            dispatch(getTransactionsHitoryTotalError(err));
        })
    }    
}

export function getTransactionsHitoryTotalSuccess(data) {
    return {
        type: types.GET_TRANSACTIONS_HISTORY_TOTAL_SUCCESS,
        data: data
    };
}

export function getTransactionsHitoryTotalError(err) {
    return {
        type: types.GET_TRANSACTIONS_HISTORY_TOTAL_ERROR,
        err
    };
}