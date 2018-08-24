import * as types from "@/constants/ActionTypes";
import {getHeaders, getPagination} from "@/utils/ApiUtil";

// createDeal
export function createDeal(deal) {
    return function (dispatch) {
        axios({
            method: 'POST',
            url: "/api/deals/",
            data: deal,
            headers: getHeaders()
        })
        .then(res => {
            dispatch(createDealSuccess(res.data.data));
        }).catch(err => {
            dispatch(createDealError(err));
        })
    }    
}

export function createDealSuccess(data) {
    return {
        type: types.CREATE_DEAL_SUCCESS,
        data
    };
}

export function createDealError(err) {
    return {
        type: types.CREATE_DEAL_ERROR,
        err
    };
}
// updateDeal
export function updateDeal(deal) {
    return function (dispatch) {
        axios({
            method: 'PUT',
            url: "/api/deals/" + deal.id,
            data: deal,
            headers: getHeaders()
        })
        .then(res => {
            dispatch(updateDealSuccess(res.data.data));
        }).catch(err => {
            dispatch(updateDealError(err));
        })
    }    
}

export function updateDealSuccess(data) {
    return {
        type: types.UPDATE_DEAL_SUCCESS,
        data
    };
}

export function updateDealError(err) {
    return {
        type: types.UPDATE_DEAL_ERROR,
        err
    };
}